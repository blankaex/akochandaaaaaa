import '@forevolve/bootstrap-dark/dist/css/bootstrap-dark.min.css'
import "bootstrap-vue/dist/bootstrap-vue.css"

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import App from "./App.vue"
import VueClipboard from "vue-clipboard2"
import VueMeta from "vue-meta"
import VueSocialSharing from "vue-social-sharing"
import Vue from "vue"

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueClipboard)
Vue.use(VueMeta)
Vue.use(VueSocialSharing)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
