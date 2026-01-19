<template>
  <DashboardLayout>
    <n-grid :cols="3" :x-gap="16" :y-gap="16">
      <n-gi>
        <n-card title="Distancia semanal">
          <h2>{{ stats.distance }} km</h2>
        </n-card>
      </n-gi>

      <n-gi>
        <n-card title="Tiempo total">
          <h2>{{ stats.time }}</h2>
        </n-card>
      </n-gi>

      <n-gi>
        <n-card title="Desnivel positivo">
          <h2>{{ stats.elevation }} m</h2>
        </n-card>
      </n-gi>
    </n-grid>

    <n-card title="Últimas actividades" style="margin-top: 24px;">
      <p>Aquí irán tus actividades con mini‑mapas</p>
    </n-card>
  </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from '../layouts/DashboardLayout.vue'
import { getMockStats } from '../services/stats'

const stats = getMockStats()
</script>
