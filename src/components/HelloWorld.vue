<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>{{msg}}</h1>
</template>

<script>
// import { defineProps, reactive } from 'vue'
export default {
  props: {
    msg: String,
  }
}
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
