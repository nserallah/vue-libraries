<template>
  <div id="app">
    <div class="custom-class">
      <simple-calender />
    </div>
    <div class="custom-class">
      <v-slider></v-slider>
    </div>
    <div class="custom-class">
      <v-mask />
    </div>
    <div class="custom-class">
      <toast-notification />
    </div>
    <div>
      <top-progress />
    </div>
    
    <div class="custom-class">
      <vue-tour />
    </div>

    <div class="custom-class">
      <vue-drop />
    </div>
    <div class="custom-class">
      <v-editor />
    </div>
    <div class="custom-class">
      <v-date-picker />
    </div>
    <div class="custom-class">
      <v-smart-table />
    </div>
    <div class="custom-class">
      <v-time-picker />
    </div>
    <div class="custom-class">
      <v-validate />
    </div>
    <div class="custom-class">
      <v-table-tow />
    </div>
    <div class="custom-class">
      <v-chart />
    </div>
    <div class="custom-class">
      <v-file-pond />
    </div>
    <div class="custom-class">
      <v-flag />
    </div>
    <div class="custom-class">
      <form-wizard />
    </div>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
body {
  height: 4000px
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}


.custom-class
{
  border-bottom: 1px solid #000;
  padding: 60px 15px
}
</style>
