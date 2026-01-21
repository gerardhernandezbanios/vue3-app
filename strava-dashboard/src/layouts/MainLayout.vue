<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" :permanent="true">
      <v-list nav dense>
        <v-list-item v-for="item in items" :key="item.to" :to="item.to" router>
          <v-list-item-icon
            ><v-icon>{{ item.icon }}</v-icon></v-list-item-icon
          >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Strava Analytics</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-4">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(true);
const items = [
  { title: "Dashboard", to: "/dashboard", icon: "mdi-view-dashboard" },
  { title: "Actividades", to: "/activities", icon: "mdi-run" },
  { title: "Tendencias", to: "/trends", icon: "mdi-chart-line" },
  { title: "Mapas", to: "/maps", icon: "mdi-map" },
  { title: "Configuración", to: "/settings", icon: "mdi-cog" },
];
</script>

<style scoped>
.v-application {
  font-family: Inter, Roboto, "Helvetica Neue", Arial;
}
</style>
