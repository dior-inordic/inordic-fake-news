import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//Импортируем созданный нами роутер
import router from './utils/router'

//После создания приложения, с помощью use, задействуем созданный роутер
createApp(App).use(router).mount('#app')
