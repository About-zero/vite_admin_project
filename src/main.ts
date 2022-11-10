import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from '@/plugins'
import '@/styles/global.scss'
// const app = createApp(App)

// // app.use(router)
// setupRouter(app)
// setupPlugins(app)
// app.mount('#app')
async function bootstrap() {
    const app = createApp(App)
    setupPlugins(app)
    setupRouter(app)
    await router.isReady()
    app.mount('#app')
}
bootstrap()
