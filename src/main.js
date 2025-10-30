import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/main.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

createApp(App).use(router).provide('bootstrap', bootstrap).mount('#app')
