import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/public.scss'
import filter from './filter'

Object.keys(filter).filter(k => {
  Vue.filter(k, filter[k])
})
Vue.use(ElementUI);
Vue.use(require('vue-electron'))

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
