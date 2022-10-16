<script>
export default {
  beforeMount: (el) => {
    console.log("beforeMount")
  },
  data() {
    return {
      hello: "Привет"
    };
  },
  setup() {
    return {
    }
  }
}
</script>

<template>
    <h1>Детализация новости</h1>
</template>

<style scoped>

</style>