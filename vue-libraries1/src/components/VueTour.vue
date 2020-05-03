<template>
  <div class="container">
        <h2 class="mb-5">vue-tour</h2>
        <div class="row">
            <div class="col">
                <input id="v-step-0" type="text" placeholder="first name">                
            </div>
            <div class="col">    
                <input id="v-step-1" type="text" placeholder="last name">                    
            </div>
            <div class="col">
                <input id="v-step-2" type="password" placeholder="password">                
            </div>
        </div>

        <v-tour name="myTour" :steps="steps"></v-tour>
  </div>
</template>

<script>
export default {
    data () {
      return {
        steps: [
          {
            target: '#v-step-0',  // We're using document.querySelector() under the hood
            header: {
              title: 'Step one',
            },
            content: `<p>Insert your first name</p>`
          },
          {
            target: '#v-step-1',
             header: {
              title: 'Step Tow',
            },
            content: '<p>Insert your last name</p>'
          },
          {
            target: '#v-step-2',
            header: {
              title: 'Step three',
            },
            content: '<p>Insert your password</p>',
            params: {
              placement: 'top' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
            }
          }
        ]
      }
    },
    mounted: function () {
      this.$tours['myTour'].start()
    }
}
</script>

<style>

</style>