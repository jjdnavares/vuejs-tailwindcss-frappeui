import './main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { FrappeUI } from 'frappe-ui'

let app = createApp(App)
app.use(FrappeUI)
app.mount('#app')
