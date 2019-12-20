import Vue from 'vue'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from '@/comand/message.plugin'
import Paginate from 'vuejs-paginate'
import Loader from '@/components/app/Loader'
import dateFilter from '@/filters/date.filter'
import localizeFilter from '@/filters/localize.filter'
import currencyFilter from '@/filters/currency.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.use(VueMeta)
Vue.filter('dateFilter', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('paginate', Paginate)

firebase.initializeApp({
  apiKey: 'AIzaSyDv4l9uCgGObDaBIh5Lcj7l72CX4KIazos',
  authDomain: 'shundrin-crm.firebaseapp.com',
  databaseURL: 'https://shundrin-crm.firebaseio.com',
  projectId: 'shundrin-crm',
  storageBucket: 'shundrin-crm.appspot.com',
  messagingSenderId: '466932943836'
  // appId: '1:466932943836:web:05f184d024ef6f873cdd19',
  // measurementId: 'G-M7KN1747JZ'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
