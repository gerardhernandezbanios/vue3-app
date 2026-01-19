<script setup lang="ts">
import { darkTheme } from "naive-ui";
import { ref } from "vue";

const isDark = ref(false);
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <router-view />
  </n-config-provider>
</template>

<style>
/* estilos globales opcionales */
</style>
