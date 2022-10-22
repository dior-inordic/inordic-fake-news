<script>
import axios from 'axios'

import Loader from './loader.vue'


export default {
  beforeMount: function(el) {
    // Сделать запрос к АПИ, для вывод новостей
    axios.get('https://fakestoreapi.com/products').then((response) => {
      console.log(response.data)
      //Записали данные, которые перебрали
      this.list = response.data
    })
  },
  data() {
    return {
      title: "Список новостей", 
      list: []
    };
  },
  setup() {
    return {
    }
  },
  components: {
    'loader' : Loader
  }
}
</script>

<template>
  <loader v-if="list.length == 0"></loader>
    <h1 v-if="list.length !== 0">{{title}}</h1>
    <section>
      <ul class='shoping'>
        <li class='shoping__item' v-bind:key="item.id" v-for="item in list">
          <router-link v-bind:to="'/news/' + item.id">
          <img class='shoping__img' v-bind:src="item.image" v-bind:alt="item.title" />
          <span class='shoping__title'>{{item.title}}</span>
        </router-link>
        </li>
      </ul>
    </section>
</template>

<style scoped>
.shoping__img{
  max-width: 50px;
}
ul{
  list-style: none;
}
.shoping__item{
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 10px;
  border-radius: 15px;
}
.shoping__item a{
  display: flex;
  align-items: center;
  color: black;
}
.shoping__item:hover{
  outline: 3px solid red;
}
.shoping__title{
  font-size: 24px;
}
</style>