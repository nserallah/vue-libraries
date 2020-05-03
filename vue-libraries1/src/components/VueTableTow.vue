<template>
  <div class="container">
      <h2>Vue table2</h2>
      <vuetable ref="vuetable"
        api-url="https://vuetable.ratiw.net/api/users"
        :fields="['id', 'nickname', 'email', 'gender']"
        data-path="data"
        pagination-path="next_page_url"
        :per-page= 5
        
    ></vuetable>
  </div>
</template>

<script>
import users from "../json/users.json"
import Vuetable from 'vuetable-2'
export default {
    components: {
        Vuetable,
    },
    data() {
        return {
            users,
        }
    }
}
</script>

<style>

</style>