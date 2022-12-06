import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers/index';
import store from './stores/store';
import Select2 from 'v-select2-component';

const app = createApp(App)
app.component('Select2', Select2)
app.use(router)
app.use(store)
app.mount('#app')