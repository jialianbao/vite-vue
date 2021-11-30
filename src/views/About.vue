<template>
  <div>
    About
    <p>
      {{ $t('nav.logout') }}
    </p>
    <p>
      sss---{{ sss }}
    </p>
    <p>
      ref---{{count}}
    </p>
  </div>
</template>


<script>
import { ref, reactive } from 'vue'
export default({
  setup () {
    const count = ref(0)
    const st = reactive({ foo: 'bar' })
    return {
      count,
      st
    }
  },
  data() {
    return {
      sss: 123
    }
  },
  mounted () {
    console.log(this.st)
    console.log(this.sss)
  }
})
</script>

<style scoped lang="scss">
p {
  border: 1px solid red;
}
</style>
