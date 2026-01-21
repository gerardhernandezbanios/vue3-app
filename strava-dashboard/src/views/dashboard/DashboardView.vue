<template>
  <div>
    <h1 class="text-h4 mb-4">Dashboard</h1>
    <v-row dense>
      <v-col cols="12" md="3">
        <BaseStat icon="mdi-run" :value="totalKm" label="Km totales" />
      </v-col>
      <v-col cols="12" md="3">
        <BaseStat icon="mdi-timer" :value="avgPace" label="Ritmo medio" />
      </v-col>
      <v-col cols="12" md="3">
        <BaseStat icon="mdi-fire" :value="calories" label="Calorías" />
      </v-col>
      <v-col cols="12" md="3">
        <BaseStat
          icon="mdi-calendar"
          :value="activitiesCount"
          label="Actividades"
        />
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12" md="8">
        <BaseCard>
          <h3 class="text-h6">Últimas actividades</h3>
          <!-- placeholder: lista o tabla -->
        </BaseCard>
      </v-col>
      <v-col cols="12" md="4">
        <BaseCard>
          <h3 class="text-h6">Resumen semanal</h3>
          <!-- placeholder: gráfico pequeño -->
        </BaseCard>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import BaseStat from "@/components/ui/BaseStat.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import { ref } from "vue";

const totalKm = ref("0 km");
const avgPace = ref("--");
const calories = ref("--");
const activitiesCount = ref(0);

// TODO: conectar con store/servicio para poblar datos reales
</script>

<style scoped></style>
