<template>
  <div class="container">
      <h2 class="mb-5">vue smart table</h2>
      <label>Filter by Name:</label>
      <input class="form-control mb-3 my-class" v-model="filters.first_name.value" placeholder="search"/>
     <v-table
         :data="users" 
        :filters="filters"
        :currentPage.sync="currentPage"
        :pageSize="5"
        @totalPagesChanged="totalPages = $event"
        class="table table-bordered"
      >
    <thead class="thead-dark" slot="head">
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Gender</th>
    </thead>
    <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.first_name }}</td>
          <td>{{ row.age }}</td>
          <td>{{ row.email }}</td>
          <td>
             {{row.gender}}
          </td>
        </tr>
    </tbody>
  </v-table> 
   <smart-pagination
        :currentPage.sync="currentPage"
        :totalPages="totalPages"
      />
  </div>
</template>

<script>
import users from "../json/users.json"
export default {
    data() {
        return {
            users,
            filters: {
                first_name: { value: '', keys: ['first_name'] }
            },
            currentPage: 1,
            totalPages: 0
        }
    },
   
}
</script>

<style>
.my-class {
    display: inline-block !important;
    width: 230px !important
}

</style>