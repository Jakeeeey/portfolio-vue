import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App);

app.use(Toast);

app.use(MotionPlugin);

app.mount('#app');
