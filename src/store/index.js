import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        show: false, //play显不显示
        data: {}, //当前歌曲数据
        datas: [], //当前歌单数据
    },
    mutations: {
        isShow(state, data) {
            state.show = data;
        },
    },
    actions: {

    },
    modules: {

    }
})