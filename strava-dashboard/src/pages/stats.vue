<template>
  <DashboardLayout>
    <v-chart :option="option" autoresize />
  </DashboardLayout>
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { GridComponent, TooltipComponent } from 'echarts/components'
import VChart from 'vue-echarts'

use([LineChart, CanvasRenderer, GridComponent, TooltipComponent])

const option = {
  xAxis: { type: 'category', data: ['L', 'M', 'X', 'J', 'V', 'S', 'D'] },
  yAxis: { type: 'value' },
  series: [{ data: [12, 18, 22, 15, 30, 45, 28], type: 'line' }]
}
</script>
