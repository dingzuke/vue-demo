
import 'babel-polyfill'
import Vue from 'vue'
// import ElementUI from 'element-ui'
import { 
  Col,Row } from 'element-ui'
  
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$ajax = axios

// Vue.use(ElementUI)
Vue.use(Col)
Vue.use(Row)

Vue.config.productionTip = false

//服务器地址
Vue.prototype.$host = "http://ljt.sinzk.com/index/interfaces/"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
axios.interceptors.response.use(
  response => {
    // if (response.data.code == "U103") {
    //   // 登录页面
    //   router.replace({
    //     path: '/login',
    //   })
    // }
    return response;
  },
  error => {
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
});
