<template>
  <div class="hello">
    <h2 class="mb-5">My Calendar</h2>
        <div class="container">
          <calendar-view
          
            :show-event-times= true
            :show-date= "showDate"
            class="theme-default holiday-us-traditional holiday-us-official">
            <calendar-view-header
                slot="header"
                slot-scope="t"
                :header-props="t.headerProps"
                @input="setShowDate" />
          </calendar-view>
        </div>
    
  </div>
</template>

<script>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
    // The next two lines are processed by webpack. If you're using the component without webpack compilation,
    // you should just create <link> elements for these. Both are optional, you can create your own theme if you prefer.
    require("vue-simple-calendar/static/css/default.css")
    require("vue-simple-calendar/static/css/holidays-us.css")
export default {
  data: function() {
            return { showDate: new Date() }
        },
        components: {
            CalendarView,
            CalendarViewHeader,
        },
        methods: {
            setShowDate(d) {
                this.showDate = d;
            },
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.calendar.nointl.locale-en.m01 .monthName::after { content: 'January'; }
</style>
