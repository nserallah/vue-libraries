<template>
  <div class="container">
        <h2>Vue Select</h2>
        <v-select v-model="selected" label="countryName" :options="options"></v-select>
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css'
export default {
   data() {
       return {
           options: [
            'foo',
            'bar',
            'baz',
            'das'
            ],
            selected: ''
       }
   }
}
</script>

<style>

</style>