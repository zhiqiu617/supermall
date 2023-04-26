import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import FastClick from 'fastclick';      // fastClick插件
import VueLazyload from "vue-lazyload";      // vue-lazyload插件

import toast from 'components/common/toast';

Vue.config.productionTip = false

/* 使用fastClick解决移动端300ms延时的问题
*    移动端300ms延时的出现：以前的网页基本都是适配PC端为主，内容展示在移动端上看会比较小，所以会存在一个双击方法的做法放大页面；
*    为了区分点击事件和双击缩放的操作，移动设备上的浏览器会默认在一次点击之后延时300ms判断是否有第二次点击，进而区分二者的处理
*    FastLClick插件就是用来减少这300ms延时的
* */
FastClick.attach(document.body)

/* 使用vue-lazyload实现图片懒加载
*  使用Vue.use()安装插件的同时，可以传入一些options：
*  loading option：src of the image while loading
* */
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})

// 通过在Vue的原型上定义$bus，利用Vue实例创建一个可用于事件总线的对象
Vue.prototype.$bus = new Vue()

// 安装封装的toast插件
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')
