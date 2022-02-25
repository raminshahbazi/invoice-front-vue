import { createApp } from 'vue'
import App from './App'
import router from './utils/router'

const app = createApp(App).use(router)
app.mount('#app')
