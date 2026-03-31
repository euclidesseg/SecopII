import { createApp } from 'vue'
import './style.css'
import './styles/vuetify-overrides.css'
import App from './App.vue'
import {vuetify} from './plugins/vuetify'
import { createPinia } from 'pinia'

// routes

import router from './router'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia)
app.use(router);
app.use(vuetify).mount('#app')
