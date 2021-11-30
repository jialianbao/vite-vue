<template>
  <span class="cursor-pointer" @click="copy(str)">{{txt}}</span>
</template>

<script>
// import { defineProps, reactive } from 'vue'
import CopyToClipboard from 'copy-to-clipboard'
export default {
  props: {
    str: String,
    txt: String
  },
  methods: {
    copy (str = '') {
      CopyToClipboard(str);
      alert('复制成功')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
