<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
import Nav from './components/Nav.vue'
// import store from './store/index'
export default {
  components: {
    Nav
  },
  setup () {
    return {
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  mounted () {
    console.log(this.$store.state.probject)
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
  // store,
}
</script>


<style lang="scss">
/* @import url('./styles/reset.scss'); */
@import './styles/reset.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
