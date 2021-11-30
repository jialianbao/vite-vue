<template>
  <div class=" bg-gray-300 h-80 p-5">
    input:
    <input class="border border-red-300" @input="debouceChange" type="text" v-model="debouceValue">
    <div>
      {{ changeValue }}
    </div>
  </div>
</template>


<script>
export default({
  data() {
    return {
      debouceValue: '',
      changeValue: '',
      t: null
    }
  },
  methods: {
    debouceChange(e){
      clearTimeout(this.t)
      this.t = setTimeout(() => {
        this.changeValue = e.target.value
      }, 2000)
    }
  },
})
</script>

<style scoped lang="scss">
p {
  border: 1px solid red;
}
</style>
