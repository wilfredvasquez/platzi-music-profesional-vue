import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import store from '@/store'
import msToMm from '@/filters/ms-to-mm'
import blur from '@/directives/blur'
import EventBus from '@/plugins/event-bus'

import routes from '@/routes'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({ 
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})