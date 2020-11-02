import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* import App from './App.vue';
import { createApp } from 'vue';
import { reactive } from 'vue';
import Ripple from 'primevue/ripple';
import router from './router';
import Button from 'primevue/button';


import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
 */