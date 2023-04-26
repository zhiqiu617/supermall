/* 将toast封装为插件 */

import Toast from "./Toast.vue";

const obj = {}

// 当使用了Vue.use()方法安装插件时，会调用插件的install()方法，并传入Vue对应作为参数
obj.install = function (Vue) {
  // 1. 创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 2. 使用组件构造器创建组件对象
  const toast = new toastConstructor()

  // 3. 使用 $mounted 将组件对象挂载到某个元素上
  toast.$mount(document.createElement('div'))

  // 4. 挂载后，可以通过 toast.$le 获取对应的元素，然后添加到dom中
  document.body.appendChild(toast.$el)

  // 5. 将组件对象放到Vue的原型上
  Vue.prototype.$toast = toast
}

export default obj
