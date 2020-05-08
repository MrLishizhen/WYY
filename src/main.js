import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './util/http.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import cookie from 'js-cookie';
//引入elemetui
Vue.use(ElementUI);

//导入全局样式
import '../public/css/index.css'

//导入fonticon样式
import '../public/fonts/iconfont.css'

//导入轮播图
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
        loading:require('./assets/loading.gif'),
        // error:require('./assets/loading.gif'),
})

Vue.use(VueAwesomeSwiper);

import plays from './util/play';//和播放相关的方法

Vue.prototype.$plays = plays;
import message from './util/message';
Vue.use(message);


Vue.prototype.$http=http;
Vue.config.productionTip = false


let vue=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue;