import Vue from "vue";
//import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import VueTheMask from 'vue-the-mask'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/index.css'
import vueTopprogress from 'vue-top-progress'
import VueTour from 'vue-tour'
require('vue-tour/dist/vue-tour.css')
import Vue2Editor from "vue2-editor"
import SmartTable from 'vuejs-smart-table'
import Vuelidate from 'vuelidate'
import FlagIcon from 'vue-flag-icon'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'



 







Vue.component('VueSlider', VueSlider)
Vue.use(VueTheMask)
Vue.use(VueToast)
Vue.use(vueTopprogress)
Vue.use(VueTour)
Vue.use(Vue2Editor)
Vue.use(SmartTable)
Vue.use(Vuelidate)
Vue.use(FlagIcon);
Vue.use(VueFormWizard)

