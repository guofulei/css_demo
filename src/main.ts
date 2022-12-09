import { createApp } from 'vue'
import App from './App.vue'
// import './assets/main.css'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import particles from 'particles.vue3'
const app = createApp(App)
app.use(Antd)
app.use(particles)
app.mount('#app')
