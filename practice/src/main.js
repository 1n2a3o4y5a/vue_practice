import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'


Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)

Vue.directive("border", function(el, binding){
  el.style.border = "solid red 2px"
})

new Vue({
  render: h => h(App),
}).$mount('#app')

