import Vue from 'vue'
import Vuex from 'vuex'
import http from '../util/http';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        show: false, //play显不显示
        data: {}, //当前歌曲数据
        datas: {}, //当前歌单数据
    },
    mutations: {
        isShow(state, data) {
            state.show = data;
        },
        music(state, data) {//改变data歌曲数据

            state.data = data;
        },
        song(state, data) {//请求当前歌单
            state.datas=data;
        }
    },
    actions: {
        music({ state, commit }, id) {

            return http({ url: `/song/detail?ids=${id}` }).then(res => {

                commit('music', res.songs[0]);
            })

        },
        song({ state, commit }, songID) {

            return http({ url: `/playlist/detail?id=${songID}` }).then(res => {
                
                commit('song',res.playlist);
            })

        }
    },
    modules: {

    }
})