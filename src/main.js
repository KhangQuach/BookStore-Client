import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'vue3-toastify/dist/index.css';
import './auth/axios.js';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
