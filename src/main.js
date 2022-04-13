import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import 'jquery';
import '@popperjs/core'; 
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
.use(router)
.mount('#app')