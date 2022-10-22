
<script>
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

import Loader from "./Loader.vue"
import Comments from "./Comments.vue"
//Не правильная строчка для нашего приложения! require - не применяем в нашем приложении
//const axios = require('axios').default;

export default {
/**
 * в переменной $route, доступно поле params, со всеми, параметрами из строки
 */
  beforeMount: function(el) {
    //const route = useRoute()
    const router = useRouter()
    //console.log("beforeMount route", route)
    console.log("beforeMount router", router)
    console.log("route.query id", router.currentRoute.value.params.id)
    //$route не доступен
    //console.log("beforeMount id", $route)

    //Получаем параметр id из URL
    const ID = router.currentRoute.value.params.id
    console.log('axios', axios);
    axios.get(`https://fakestoreapi.com/products/${ID}`)
    .then((response) => {
        // Блок then, срабатыватывает после отработки запроса к серверу

        //Записываем данные пришедшие от сервера в блок c данными (data), ячейку data
        this.data = response.data
    })
  },
  mounted: () => {
    console.log("mounted")
    //console.log($route)
  },    
  data() {
    return {
      hello: "Привет",
      data: null
    };
  },
  setup() {
    return {
    }
  },
  components: {
    'loader': Loader,
    'comments': Comments
  }
}
</script>

<template>
    <loader v-if="!data"></loader>
    <section v-if="data">
      <button>
        <router-link to='/news/'>
          Назад
        </router-link>
      </button>
      <img v-bind:src="data?.image" v-bind:alt="data?.title">
      <h1>{{data?.title}}</h1>
    </section>
    <comments :id="data.id"></comments>
</template>

<style scoped>
  img{
    max-width: 400px;
  }
  button{
    position: absolute;
    top: 0;
    left: 0;
  }
  button a{
    color: white;
    font-size: 20px;
  }
</style>