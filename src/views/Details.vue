<template>
  <div>
    {{ url }}
    <img :src="url" alt="图片">
  </div>
</template>


<script>
import { ref, reactive } from 'vue'
export default({
  setup () {
    const url = ref('url')
    // const st = reactive({ foo: 'bar' })
    return {
      url
    }
  },
  data() {
    return {
      url: this.$store.state.details
    }
  },
  mounted () {
    console.log(this.$store.state.details)
  }
})
</script>

<style scoped lang="scss">
p {
  border: 1px solid red;
}
</style>
