//Packages
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
//Modules
import Store from './stores/store'
import Route from './routes/route'

Vue.use(Vuex);
Vue.use(VueRouter);

const router= new VueRouter(Route)
const store = new Vuex.Store(Store);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
