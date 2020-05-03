<template>
  <div>
      <h2>Vue-TimePicker</h2>
      <label>Select time: </label>
      <vue-timepicker v-model="yourTimeValue" format="HH:mm:ss"></vue-timepicker>
  </div>
</template>

<script>
import VueTimepicker from 'vuejs-timepicker'
export default {
    components: { VueTimepicker },
    data() {
      return {
          yourTimeValue: {
            HH: "",
            mm: "",
            ss: ""
         }
      }
    }
}
</script>

<style>

</style>