// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'

import VueResize from 'vue-resize'
import 'vue-resize/dist/vue-resize.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueResize)



Vue.mixin({
  methods: {
    openLink: function (whereTo) {
      if (this.$router.currentRoute.path !== '/' + whereTo) this.$router.push(whereTo)
    },
    openMaps: function (location) {
      if (location === 'jogja')
        window.open("https://goo.gl/maps/cRY4vrfU44oT75xeA", "_blank")
      if (location === 'citra')
        window.open("https://goo.gl/maps/UX2PvLbA5RbUFb417", "_blank")
    },
    openWA: function () {
      window.open('https://wa.me/6281385846234', '_blank')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
