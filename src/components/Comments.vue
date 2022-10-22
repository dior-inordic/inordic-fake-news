<script>
import axios from 'axios'

export default {
  beforeMount: function(el) {
        if(this?.id){
            axios.get("http://127.0.0.1:5173/stub/comments.json").then(responce => {
               const filteredArray = responce.data.list.filter(
                    element => element.product_id == this?.id
                )
                console.log("Отсортирован массив", filteredArray)
                this.list = filteredArray
                this.count = filteredArray.length
            })
        }
  },
  data() {
    return {
        count: 0,
        list: null
    };
  },
  setup() {
    return {}
  },
  props: ['id']
}
</script>

<template>
    <h2>Комментарии({{count}})</h2>
    <ul>
        <li v-bind:key="item.id" v-for="item in list">
            {{item.text}}
        </li>
    </ul>
</template>

<style scoped>
li {
    list-style: none;
    outline: 1px solid white;
    margin: 15px;
    padding: 10px;
}
</style>