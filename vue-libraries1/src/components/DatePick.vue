<template>
  <div class="container">
    <h2 class="mb-5">vuejs-datepicker</h2>
    <form>
      <vuejs-datepicker placeholder="Select Date" v-model="dateValue"></vuejs-datepicker>
    </form>
  </div>
</template>

<script>
import vuejsDatepicker from 'vuejs-datepicker'
export default {
  components: {
    vuejsDatepicker
  },
  data() {
    return {
      dateValue: ''
    }
  }
}
</script>

<style>

</style>