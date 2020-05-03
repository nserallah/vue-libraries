<template>
  <div>
    <h2>vue-echarts</h2>
     <!-- <v-chart :options="polar"/> -->
  </div>
</template>

<script>
import Vue from 'vue'
import ECharts from 'vue-echarts' 
 
// import ECharts modules manually to reduce bundle size
//import 'echarts/lib/chart/bar'
//import 'echarts/lib/component/tooltip'
 
// If you want to use ECharts extensions, just import the extension package and it will work
// Taking ECharts-GL as an example:
// You only need to install the package with `npm install --save echarts-gl` and import it as follows
//import 'echarts-gl'
 
// register component to use
Vue.component('v-chart', ECharts)
 
export default {
  // components: {
  //   'v-chart': ECharts
  // },
  // data () {
  //   let data = []
 
  //   for (let i = 0; i <= 360; i++) {
  //       let t = i / 180 * Math.PI
  //       let r = Math.sin(2 * t) * Math.cos(2 * t)
  //       data.push([r, i])
  //   }
 
  //   return {
  //     polar: {
  //       title: {
  //         text: '极坐标双数值轴'
  //       },
  //       legend: {
  //         data: ['line']
  //       },
  //       polar: {
  //         center: ['50%', '54%']
  //       },
  //       tooltip: {
  //         trigger: 'axis',
  //         axisPointer: {
  //           type: 'cross'
  //         }
  //       },
  //       angleAxis: {
  //         type: 'value',
  //         startAngle: 0
  //       },
  //       radiusAxis: {
  //         min: 0
  //       },
  //       series: [
  //         {
  //           coordinateSystem: 'polar',
  //           name: 'line',
  //           type: 'line',
  //           showSymbol: false,
  //           data: data
  //         }
  //       ],
  //       animationDuration: 2000
  //     }
  //   }
  // }
}
</script>

<style>
    /**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  height: 100%;
}
</style>