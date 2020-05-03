<template>
  <div class="container">
    <h2>vue-picture-input</h2>
    <div class="hello">    
        <picture-input 
        ref="pictureInput"
        width="400" 
        height="300" 
        margin="16" 
        accept="image/jpeg,image/png" 
        size="10" 
        :removable= true
        button-class="btn btn-success"
        :custom-strings="{
            upload: '<h1>Bummer!</h1>',
            drag: 'Drag and Drop your images'
        }"
        @change="onChange">
        </picture-input>
    </div>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'
export default {
    components: {
        PictureInput
    },
    data () {
        return {
            image: ''
        }
    },
    methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
        
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>

<style>

</style>