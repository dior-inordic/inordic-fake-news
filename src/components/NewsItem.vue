<script>
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
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
    axios.get("https://fakestoreapi.com/products/1")
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
  }
}
</script>

<template>
    <h1>{{data?.title}}</h1>

</template>

<style scoped>

</style>