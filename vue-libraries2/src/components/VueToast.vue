<template>
  <div class="container">
      <h2 class="mb-4">vue-toast</h2>
      <div class="row">
          <div class="col">
              <h3>vue-toasted</h3>
              <button class="btn btn-info" @click="toasted">Toasted</button>
          </div>
          <div class="col">
            <h3>vue-toaster</h3>
            <button class="btn btn-info" @click="toaster">Toaster</button>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        toasted() {
            this.$toasted.show('hello there, i am a toast !!', { icon : 'fas fa-hourglass-half fa-spin fa-fw fa-lg mr-2'})
        },
        toaster() {
           this.$toastr.Add({
                name: "UniqueToastName", // this is give you ability to use removeByName method
                title: "Easy Toast", // Toast Title
                msg: "Hello you are calling me", // Toast Message
                timeout: 1500, // Remember defaultTimeout is 5 sec.(5000) in this case the toast won't close automatically
                //progressBarValue: 50, // Manually update progress bar value later; null (not 0) is default
                position: "toast-top-full-width", // Toast Position.
                type: "error", // Toast type,
                preventDuplicates: true, //Default is false,
                style: { backgroundColor: "#117a8b", width: "150px", marginTop: "150px" } // bind inline style to toast  (check [Vue doc](https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles) for more examples)
            });
        }
    }
}
</script>

<style>

</style>