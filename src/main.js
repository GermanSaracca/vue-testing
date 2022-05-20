import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//This is a new instance of Vue
//Can help us to use data between brothers components by emitting events and listening from others
export const bus = new Vue()

//Custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
})
Vue.directive('theme', {
  bind(el, binding, vnode) {
    //The binding value will be v-theme="'dark'" for example
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px';
    }
    //The binding arg will be v-theme:dark for example
    if (binding.arg == 'dark') {
      el.style.color = '#fff';
      el.style.backgroundColor = '#333';
    } else if (binding.arg == 'light') {
      el.style.color = '#333';
      el.style.backgroundColor = '#fff';
    }
  }
})
//Custom filters
//For example changing a text to upercase
//Used like this {{ value | to-uppercase }}
//Commented because now using locally
// Vue.filter('to-uppercase', function(value) {
//   return value.toUpperCase();
// })
// Vue.filter('snippet', function(value) {
//   return value.slice(0, 100) + '...';
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
