import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'

Vue.config.productionTip = false

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vue-http-702b0/databases/(default)/documents";

axios.interceptors.request.use(
  config => {
    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
