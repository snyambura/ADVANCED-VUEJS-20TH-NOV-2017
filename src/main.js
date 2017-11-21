import Vue from 'vue'
import App from './App.vue'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

// Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);



const router = new VueRouter({
    routes:Routes

});
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router:router
})
