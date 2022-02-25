import { createApp } from 'vue'
import App2 from './App2.vue'
import router from './utils/router'

const app = createApp(App2).use(router)
app.mount('#app')
