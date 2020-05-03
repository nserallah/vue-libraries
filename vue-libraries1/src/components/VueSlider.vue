<template>
  <div class="container text-center">
      <h2 class="mb-5">this is my Vue-slider-component</h2>
      <div class="single-slider">
        <vue-slider v-model="value" />
        <p>value: {{value}}</p>
      </div>
      <div class="multi-slider">
          <vue-slider v-model="value_3"></vue-slider>
          <p>value: {{ value_3 }}</p>
      </div>
      <div>
        <vue-slider v-model="value1" :marks="marks1"></vue-slider> <br> <br>
        <vue-slider v-model="value2" :marks="marks2"></vue-slider> <br>
      </div>
      
  </div>
</template>

<script>

export default {
   
  data () {
    return {
        value: 0,
       value_3: [0, 50, 80],
        value1: 0,
        marks1: val => val % 20 === 0,
        value2: 0,
        marks2: val => val % 10 === 0 ? ({
          label: `${val}%`,
          labelStyle: {
            opacity: val * 0.01 * 0.7 + 0.3
          },
          labelActiveStyle: {
            color: '#3498db'
          }
        }) : false
    }
  }
}
</script>

<style>

</style>