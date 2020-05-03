<template>
  <div>
      <h2 class="mb-3">Sweet Alert</h2>
      <button class="btn btn-danger mb-3" @click="showAlert">click me to alert</button> <br/>
      <button class="btn btn-success" @click="showSuccess">click me to alert</button>
  </div>
</template>

<script>
import 'sweetalert2/dist/sweetalert2.min.css'
export default {
    methods: {
            showAlert() {
                // Use sweetalert2
                this.$swal(
                    'The Internet?',
                    'That thing is still around?',
                    'question'
                );
            },
            showSuccess() {
                this.$swal({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
}
</script>

<style>

</style>