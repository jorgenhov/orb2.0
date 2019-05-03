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

Vue.config.productionTip = false

Vue.use(Vuelidate)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
