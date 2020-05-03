<template>
  <div class="container">
      <h2>vue-perfect-scrollbar</h2>
    <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
        <img src="https://fromthehipphoto.com/v3/wp-content/uploads/2019/12/0001-From-The-Hip-Photo-breck.jpg" height="600" width="700" alt="">
    </VuePerfectScrollbar>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
    components: {
        VuePerfectScrollbar
    },
    data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  methods: {
    // scrollHandle(evt) {
    //   console.log(evt)
    // }
  }
}
</script>

<style>
.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 300px;
}
</style>