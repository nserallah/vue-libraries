<template>
  <div id="app">
    <div class="custom-class">
      <v-tree />
    </div>
    <div class="custom-class">
      <v-load />
    </div>
    <div class="custom-class">
      <v-moment />
    </div>
    <div class="custom-class">
      <v-multi-select />
    </div>
    <div class="custom-class">
      <v-paypal />
    </div>
    <div class="custom-class">
      <v-scrollbar />
    </div>
    <div class="custom-class">
      <v-pic-input />
    </div>
    <div class="custom-class">
      <v-quill />
    </div>
    <div class="custom-class">
      <v-select-tow />
    </div>
    <div class="custom-class">
      <v-sweet-alert />
    </div>
    <div class="custom-class">
      <v-toast />
    </div>
    <div class="custom-class">
      <v-good-tab />
    </div>
    <div class="custom-class">
      <v-translation />
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
  height: 3000px
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
