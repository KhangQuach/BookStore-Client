import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'vue3-toastify/dist/index.css';
import './auth/axios.js';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
