import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

console.log("main.js-->"+store.state.count)
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
