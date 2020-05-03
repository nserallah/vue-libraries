<template>
  <div>
      <h2>vue Lazyload</h2>
    <!-- <div v-lazy-container="{ selector: 'img' }">
        <img data-src="http://hilongjw.github.io/vue-lazyload/dist/avatar/test1.jpg">
    </div> -->

    <lazy-component @show="handler">
  <img class="mini-cover" :src="img.src" width="400px" height="300">
</lazy-component>


  </div>
</template>

<script>
export default {
    data () {
    return {
        img: {
             src: 'http://hilongjw.github.io/vue-lazyload/dist/avatar/test1.jpg'
        }
       
    
    }
  },
    methods: {
      handler (component) {
        console.log('this component is showing' + component)
      }
    }
}
</script>

<style>

</style>