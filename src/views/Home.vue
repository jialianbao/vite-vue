<template>
  <div class="home">
    <div class="max_width">
      <ul class="img_list">
        <li v-for="url in imgList" :key="url" :style="{'background-image': `url(${url})`}" @click="toDetails(url)">
          <!-- {{url}} -->
          <!-- @click="toDetails(url)" -->
          <Copy :str="url" :txt="url"></Copy>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import Copy from './../components/Copy.vue'

export default({
  components: {
    Copy
  },
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
      sss: 123,
      imgList: [
        'http://placekitten.com/280/200',
        'http://placekitten.com/282/200',
        'http://placekitten.com/284/200',
        'http://placekitten.com/285/200',
        'http://placekitten.com/287/200',
        'http://placekitten.com/289/200',
        'http://placekitten.com/290/200',
        'http://placekitten.com/293/200',
        'http://placekitten.com/294/200',
        'http://placekitten.com/295/200',
        'http://placekitten.com/290/201',
        'http://placekitten.com/300/200',
      ]
    }
  },
  mounted () {
    // console.log(this.$store)
    this.testP()
    console.log(this.$i18n.locale)
    // setTimeout(() => {
    //   this.$i18n.locale = 'en'
    //   console.log(this.$i18n)
    // }, 5000)
  },
  methods: {
    toDetails (url) {
      this.$store.commit('setDetails', url)
      this.$router.replace({
        name: 'details'
      })
    },

    async wait(i) {
      return new Promise((resolve)=>{
        setTimeout(() => {
          console.log(i)
          resolve(true)
        }, 5000)
      })
    },
    async testP (content, index) {
      for (let i = 0; i < 8; i++) {
        await this.wait(i)
      }
    }
  }
})
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
.home {
  background: #fefefe;
  .max_width {
    width: 1200px;
    margin: 0 auto;
    background: #fefefe;
  }
}
.img_list{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li{
    box-sizing: border-box;
    width: 290px;
    height: 200px;
    margin: 10px 0;
    border: 1px solid red;
    border-radius: 5px;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
