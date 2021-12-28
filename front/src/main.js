// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
const config = {
  //vee-validate和element ui发生冲突
  fieldsBagName: 'vee-fields'
  }
  Vue.use(VeeValidate, config)

  import moment from 'moment'
import Vue from 'vue'
import App from './App'
// import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Dao from '@/components/Dao'
import router from './router/index'
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.use(require('vue-moment'));
Vue.prototype.moment = moment
Vue.filter('dateYMDHMSFormat',function(dateStr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dateStr).format(pattern);
})
Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  // components: { Dao },
  // // // redirect:'/App',
  // template: '<Dao/>'
})
