// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


/**
 * 注册一个简单的全局组件,两种方式
 */

Vue.component('Global',{
  template:'<p>This is for {{whatFor}}</p>',
  data:function(){
    return {
      whatFor:'test global component'
    }
  }
})

import Hello from './components/HelloWorld.vue'
Vue.component('Hello',Hello)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    //  App 
    App:App
  
  },
  template: '<App/>'
  // template:'<div>hello vue<div>'
})
