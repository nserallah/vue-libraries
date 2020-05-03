<template>
  <div class="container">
      <h2 class="mb-5">Vue multi select</h2>
      <div class="row">
          <div class="col">
              <label class="typo__label">Single</label>
            <multiselect v-model="value" :options="options"></multiselect>
          </div>
          <div class="col">
            <label class="typo__label">Groups</label>
            <multiselect v-model="valueTow" :options="optionsTow" :multiple="true" group-values="libs" group-label="language" :group-select="true" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
            <!-- <pre class="language-json"><code>{{ valueTow  }}</code></pre> -->
          </div>
      </div>
  </div>
</template>

<script>
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
    data() {
        return {
            value: null,
            options: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched'],
            optionsTow:[
        {
          language: 'Javascript',
          libs: [
            { name: 'Vue.js', category: 'Front-end' },
            { name: 'Adonis', category: 'Backend' }
          ]
        },
        {
          language: 'Ruby',
          libs: [
            { name: 'Rails', category: 'Backend' },
            { name: 'Sinatra', category: 'Backend' }
          ]
        },
        {
          language: 'Other',
          libs: [
            { name: 'Laravel', category: 'Backend' },
            { name: 'Phoenix', category: 'Backend' }
          ]
        }
      ],
            valueTow:[]
        }
    }
}
</script>

<style>

</style>