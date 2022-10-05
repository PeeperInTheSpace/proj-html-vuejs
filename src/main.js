import Vue from 'vue'
import App from './App.vue'
// BOOSTRAP
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// FONT AWESOME FREE ICONS
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
