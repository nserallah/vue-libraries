<template>
  <div>
      <h2 class="mb-5">vue-moment</h2>
      <div>
          <span>format1 :</span>
           <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span>
      </div>
      <div>
          <span>format2 :</span>
           <span>{{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}}</span>
      </div>
       <div>
          <span>format3 :</span>
           <span>{{moment().format()}}</span>
      </div>
      <div>
          <span>format4 :</span>
           <span>{{moment().format("ddd, hA")}}</span>

      </div>
      
    
  </div>
</template>

<script>
import Vue from "vue"
import moment from "moment"
Vue.use(require('vue-moment'))

export default {
    data() {
        return {
            moment
        }
    }
}
</script>

<style>

</style>