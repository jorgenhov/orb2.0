import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vSelect from 'vue-select'
import Vuelidate from 'vuelidate'
import router from './router'
import { store } from './store/store'
import axios from 'axios'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

axios.defaults.baseURL = 'http://localhost:3100/api'
axios.interceptors.request.use(
  (config) => {
    let token = "nope";
    //let token = localStorage.getItem('authtoken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${ token }`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

Vue.config.productionTip = false

Vue.use(Vuelidate)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
