<script>
export default {
  beforeMount: (el) => {
    console.log("beforeMount")
  },
  data() {
    return {
      title: "Список новостей"
    };
  },
  setup() {
    return {
    }
  }
}
</script>

<template>
    <h1>{{title}}</h1>
</template>

<style scoped>

</style>