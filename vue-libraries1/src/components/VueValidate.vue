<template>
  <div>
    <h2>vuelidate (Form Validation)</h2>
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Name</label>
        <input class="form__input" v-model.trim="name" @input="setName($event.target.value)"/>
        <div class="error text-danger" v-if="!$v.name.required">Field is required</div>
        <div class="error text-danger" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
        
    </div>
    
    <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
        <label class="form__label">Age</label>
        <input class="form__input" :value="age" @change="setAge($event.target.value)"/>
    </div>
    <div class="error text-danger" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div><span tabindex="0">Blur to see changes</span>
  </div>
</template>

<script>

import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: '',
      age: 0,
      
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  },

  methods: {
    setName(value) {
      this.name = value
      this.$v.name.$touch()
    },
    setAge(value) {
      this.age = value
      this.$v.age.$touch()
    }
  }
}
</script>

<style>

</style>