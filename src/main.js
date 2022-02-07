import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import toast from 'components/Toast'
import ElementUI from 'element-ui'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import 'bootstrap'
import $ from 'jquery'
Vue.config.productionTip = false
//添加事件总线对象
Vue.prototype.$bus =new Vue()
//安装toast插件 
Vue.use(toast)
Vue.use(ElementUI)

//解决移动端的300ms延迟
FastClick.attach(document.body)

//使用懒加载
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

