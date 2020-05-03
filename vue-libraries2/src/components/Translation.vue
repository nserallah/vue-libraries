<template>
  <div>
      <h2 class="mb-5">{{$t('title')}}</h2>
    <div class="dropdown show">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Language
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#" @click.prevent="setLocale('ar')">Arabic</a>
            <a class="dropdown-item" href="#" @click.prevent="setLocale('en')">Enflish</a>
            
        </div>
    </div>
    
    <p>{{$t('message')}}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
		setLocale(locale){
            this.$i18n.locale = locale;
		}
	}
}
</script>

<style>

</style>