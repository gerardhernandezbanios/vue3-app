import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import { router } from './router'
import './styles/global.css'

// Create and mount the Vue application
createApp(App)
  .use(router)
  .use(naive)
  .mount('#app')
