<template>
    <div>
        <vue-topprogress 
        ref="topProgress"
        v-bind="setting"
        ></vue-topprogress>
    </div>
</template>

<script>
export default {
    data() {
        return {
            setting: {
                color : "#f00",
                height : 3
            }
        }
    },
    mounted () {
    this.$refs.topProgress.start()
 
    // Use setTimeout for demo
    setTimeout(() => {
      this.$refs.topProgress.done()
    }, 3000)
  }
}
</script>
<style>

</style>