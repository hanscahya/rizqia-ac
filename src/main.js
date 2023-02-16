// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { createGtm } from "vue-gtm";

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'

import VueResize from 'vue-resize'
import 'vue-resize/dist/vue-resize.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueResize)

Vue.use(
  createGtm({
    id: "G-E26HY48MGL", // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
    queryParams: {
      // Add url query string when load gtm.js with GTM ID (optional)
      gtm_auth: "AB7cDEf3GHIjkl-MnOP8qr",
      gtm_preview: "env-4",
      gtm_cookies_win: "x",
    },
    defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    nonce: "2726c7f26c", // Will add `nonce` to the script tag
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    vueRouter: router, // Pass the router instance to automatically sync with router (optional)
    ignoredViews: ["homepage"], // Don't trigger events for specified router names (case insensitive) (optional)
    trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
  })
);


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
      window.open('https://wa.me/6287864840007', '_blank')
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
