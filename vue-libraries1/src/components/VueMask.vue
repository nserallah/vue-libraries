<template>
  <div>
      <h2 class="mb-5">vue-the-mask</h2>
      <label>
          CPF/CNPJ: 
        <the-mask :mask="['###.###.###-##', '##.###.###/####-##']" />
      </label>
      <label>
          Hex. Color: 
        <the-mask mask="FFFFFF" :tokens="hexTokens" />
      </label>
      <label>
          The Date: 
        <input type="tel" v-mask="'##/##/####'" placeholder="dd/mm/yyyy" />
      </label>
  </div>
</template>

<script>
export default {
    data () {
        return {
            hexTokens: {
                F: {
                    pattern: /[0-9a-fA-F]/,
                    transform: v => v.toLocaleUpperCase()
                }
            }
        }
    }
}
</script>

<style>

</style>