import vue from '../main';
import axios from 'axios';
import http from './http';
import store from '../store';
let plays = {

    //检验当前歌曲是否可用
    verification: (id) => {
        return axios({ url: `/check/music?id=${id}` }).then(res => {
      
            if (res.data.success) {
                console.log(res.data.success)
                return res.data.message;
            }
        }).catch(err => {
            return err.message='亲爱的，暂无版权';
        })
    },
    //点击获取歌曲信息并且获取当前歌单
    musicClick: function (id, songID) {
        //获取保存在session中的歌单id
        let ovl = sessionStorage.getItem('songID');
        
        this.verification(id).then(res => {
            if (res == 'ok') {
                sessionStorage.setItem('musicId', id);//保存当前歌曲id
                sessionStorage.setItem('songID', songID);//保存当前歌单id
                //调用vuex仓库中的方法
                store.dispatch('music', id);
                if(songID!=ovl){//判断是不是在同一个歌单里面，多次点击
                    store.dispatch('song', songID);
                }
                return true;
            }else{
                //告诉用户当前歌曲没有版权
                vue.$message(res);
                return false;
            }
        })
    }


}

export default plays;