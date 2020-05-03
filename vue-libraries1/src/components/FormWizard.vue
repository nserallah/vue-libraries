<template>
    <div class="container">
        <h2>vue-form-wizard</h2>
    <form-wizard @on-complete="onComplete" :start-index="1">
        
        <tab-content title="Personal details">
            My first tab content
        </tab-content>
        <tab-content title="Additional Info">
            My second tab content
        </tab-content>
        <tab-content title="Last step">
            Yuhuuu! This seems pretty damn simple
        </tab-content>
        
    </form-wizard>
    

  </div>
</template>

<script>
export default {

    methods: {
      onComplete: function(){
          alert('Yay. Done!');
       }
      }
}
</script>

<style>

</style>