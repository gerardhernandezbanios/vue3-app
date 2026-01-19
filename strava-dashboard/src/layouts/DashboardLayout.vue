<template>
  <n-layout has-sider>
    <n-layout-sider
      v-if="!collapsed"
      bordered
      width="240"
      content-style="padding: 20px;"
      collapse-mode="width"
    >
      <n-menu :options="menu" @update:value="go" />
    </n-layout-sider>

    <n-layout>
      <n-layout-header bordered>
        <div class="header">
          <HamburgerButton @toggle="collapsed = !collapsed" />
          <h2>Strava Analytics</h2>
        </div>
      </n-layout-header>

      <n-layout-content content-style="padding: 24px;">
        <slot />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HamburgerButton from '../components/HamburgerButton.vue'

const router = useRouter()
const collapsed = ref(false)

const menu = [
  { label: 'Dashboard', key: '/' },
  { label: 'Activities', key: '/activities' },
  { label: 'Maps', key: '/maps' },
  { label: 'Statistics', key: '/statistics' },
  { label: 'Challenges', key: '/challenges' },
  { label: 'Profile', key: '/profile' }
]

function go(key: string) {
  router.push(key)
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
}
</style>
