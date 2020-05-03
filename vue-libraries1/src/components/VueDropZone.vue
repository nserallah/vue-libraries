<template>
  <div class="container">
      <vue-dropzone
        ref="myVueDropzone"
        id="dropzone"
        :options="dropzoneOptions"
        :duplicateCheck= "true"
        
         ></vue-dropzone>
         
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
    components: {
        vueDropzone: vue2Dropzone
    },
    data: function () {
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 1.5,
          headers: { "My-Awesome-Header": "header value" },
          addRemoveLinks: true,
          dictDefaultMessage: "<i class='fas fa-upload fa-lg'></i> UPLOAD YOUR FILE"
          
      }
    }
  }
}
</script>

<style>

</style>