<template>
  <div class="nav_box relative z-10">
    <div class="max_width flex_lr flex_center">
      <router-link to="/about">去about</router-link>
      <router-link to="/Home">去Home</router-link>
      <router-link to="/swiper">去Swiper</router-link>
      <router-link to="/debouce">节流</router-link>
      <span>{{ $t('nav.logout') }}</span>
      <div class="h-10 group ml-5 relative cursor-pointer">
        <div class="relative h-10 w-20 bg-red-200 text-black flex items-center justify-center">{{ locale }}</div>
        <ul class="absolute top-10 hidden group-hover:block bg-green-300">
          <li class="hover:bg-red-300 h-10 w-20 border-b-2 flex items-center justify-center" @click="setLocale(locale)" v-for="(locale,index) in localList" :key="index">{{ locale }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getSessionStorage, setSessionStorage } from "../utils/index"

export default {
  data () {
    return {
      localList: ['zh', 'en'],
      locale: 'zh'
    }
  },
  mounted () {
    // console.log(this.$i18n.locale)
    // console.log(this.$store.state.locale, 'vueX 的 状态')
    this.locale = getSessionStorage('locale')
    if (this.locale) {
      this.setLocale(this.locale);
    } else {
      this.locale = this.$i18n.locale;
    }
  },
  methods: {
    setLocale (locale) {
      this.locale = locale
      this.$i18n.locale = locale
      // this.$store.commit('setStateDate', 'locale', locale)
      setSessionStorage('locale', locale)
    }
  }
}


</script>

<style scoped lang="scss">
.nav_box{
  width: 100%;
  height: 80px;
  background: coral;
}
.max_width{
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  background: coral;
}
a{
  padding: 0 10px;
  color: #fff;
  text-decoration: none;
}
a:hover{
  color: rgb(223, 255, 150);
}
a:active{
  color: #fff;
}
</style>
