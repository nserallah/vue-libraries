<template>
  <div class="container">
      <h2>Vue Good Table</h2>
      <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: true,
        skipDiacritics: true,
        placeholder: 'Search this table'}"
        :pagination-options="{enabled: true, perPage: 5}">
        <div slot="table-actions">
            <button class="btn btn-success mr-2">Action1</button>
            <button class="btn btn-success">Action2</button>
        </div>
      </vue-good-table>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
export default {
    data() {
        return {
            columns: [
                {
                label: 'Name',
                field: 'name',
                },
                {
                label: 'Age',
                field: 'age',
                type: 'number',
                },
                {
                label: 'Created On',
                field: 'createdAt',
                type: 'date',
                dateInputFormat: 'yyyy-MM-dd',
                dateOutputFormat: 'MMM Do yy',
                },
                {
                label: 'Percent',
                field: 'score',
                type: 'percentage',
                },
            ],
            rows: [
                { id:1, name:"John", age: 20, createdAt: '2011-10-28',score: 0.03343 },
                { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
                { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
                { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
                { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
                { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
            ],
        }
    }
}
</script>

<style>

</style>