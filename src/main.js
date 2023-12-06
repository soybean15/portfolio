import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import './style/index.css'


const pinia = createPinia()
const app = createApp(App)



app.use(pinia)

app.use(router)

const head = createHead()
app.use(head)

app.mount('#app')