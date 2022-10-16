import { createWebHistory, createRouter } from "vue-router";

//Ипортируем компоненты, которые будут отображаться на разных страницах
import HelloWorld from "../../components/HelloWorld.vue"
import NewsList from "../../components/NewsList.vue"
import NewsItem from "../../components/NewsItem.vue"
//Делаю конфигурацию(инструкцию), который показывает определенный компонент, при переходе по определенному пути
//Например при переходе на / отображаем компонент HelloWorld
const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld
  },
  {
    path: "/news",
    name: "News",
    component: NewsList
  },
  {
    // 
    path: "/news/:id",
    name: "NewsItem",
    component: NewsItem
  }
]

//Создаем объект роутинга, который будет работать в приложении
const router = createRouter({
  //Пока пропускаем разбор history
  history: createWebHistory(),
  //Передаем в поле при создании объекта роутера наш routes
  routes: routes,
});

//export default - это экспорт объекта по умолчанию, подходит для оного элемента
export default router