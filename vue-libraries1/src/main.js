import Vue from 'vue'
import App from './App.vue'
import './components.js'
import './libraries.js'


Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
}).$mount('#app')
