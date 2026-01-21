<template>
  <v-card class="pa-4 text-center">
    <v-icon size="36">{{ icon }}</v-icon>
    <div class="text-h5 mt-2">{{ value }}</div>
    <div class="text-caption">{{ label }}</div>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  icon: { type: String, required: true },
  value: { type: [String, Number], required: true },
  label: { type: String, required: true },
});
</script>

<style scoped></style>
