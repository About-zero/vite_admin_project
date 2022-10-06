import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
const app = createApp(App)

// app.use(router)
setupRouter(app)
app.mount('#app')
