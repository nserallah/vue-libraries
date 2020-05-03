<template>
    <div class="container">
        <h2 class="mb-5">vue-toast-notification</h2>
       <div class="row">
           <div class="col">
               <button @click="successFuc" type="button" class="btn btn-success">Success</button>
            </div>
            <div class="col">
               <button @click="infoFuc" type="button" class="btn btn-info">Info</button>
            </div>
            <div class="col">
               <button @click="dangerFuc" type="button" class="btn btn-danger">Danger</button>
            </div>
       </div>
   </div>
</template>
 
<script>
import Vue from 'vue';
 export default {
     data () {
         return {

         }
     },
     methods: {
         successFuc() {
             Vue.$toast.open({
                 message: "Success",
                 type: "success",
                 position: "top-right"
             });
         },
         infoFuc() {
             Vue.$toast.open({
                 message: "this is your INFO",
                 type: "info",
                 position: "top"
             });
         },
         dangerFuc() {
             Vue.$toast.open({
                 message: "Danger",
                 type: "error",
                 position: "bottom-left"
             });
         }
     }
 }
</script>
 
<style>
 
</style>