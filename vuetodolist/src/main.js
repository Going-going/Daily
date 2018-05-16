import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import router from './router'
import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar'
import 'vue-ydui/dist/ydui.base.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyLoad from 'vue-lazyload'
import './plugins/plugin'


import ComHeader from './components/header.vue'
import ComFooter from './components/footer.vue'
// import ComSwiper from './components/swiper.vue'

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: '/static/error.jpg',
  loading: '/static/loading.gif'
})

Vue.component(NavBar.name, NavBar);
Vue.component(NavBarBackIcon.name, NavBarBackIcon);
Vue.component(NavBarNextIcon.name, NavBarNextIcon);

Vue.component('com-header', ComHeader)
Vue.component('com-footer', ComFooter)
// Vue.component('com-swiper', ComSwiper)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
