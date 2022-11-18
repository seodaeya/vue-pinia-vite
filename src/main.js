import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './plugins/router'
import axios from './plugins/axios'

import './assets/main.css'

const app = createApp(App)

app.config.globalProperties.axios = axios;

app.use(createPinia())
app.use(router)
app.mount('#app')
