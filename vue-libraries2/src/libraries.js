import Vue from 'vue'
//import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import VueLazyload from 'vue-lazyload'
import VueMeta from 'vue-meta'
import Multiselect from 'vue-multiselect'
import VueQuill from 'vue-quill'
import vSelect from 'vue-select'
import VueSweetalert2 from 'vue-sweetalert2'
import Toasted from 'vue-toasted';
import VueToastr from "vue-toastr";
import VueGoodTablePlugin from 'vue-good-table';
import VueI18n from 'vue-i18n'








Vue.use(VueLazyload, {
    lazyComponent: true,
    preLoad: 1.5,
    error: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png',
    loading: 'https://i0.wp.com/www.cssscript.com/wp-content/uploads/2015/11/ispinner.jpg?fit=400%2C298&ssl=1',
    attempt: 1
    
})
Vue.use(VueMeta)
Vue.component('multiselect', Multiselect)
Vue.use(VueQuill)
Vue.component('v-select', vSelect)
Vue.use(VueSweetalert2)
Vue.use(Toasted, {
    iconPack : 'custom-class',
    duration: 1500  
})
Vue.use(VueToastr)
Vue.use(VueGoodTablePlugin)
Vue.use(VueI18n)
