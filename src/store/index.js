// import Vuex from "vuex"

// import { reactive } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      probject: '测试项目',
      details: '',
      locale: ''
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setDetails (state, url) {
      state.details = url
    },
    setStateDate(state, key, val){
      state[key] = val
    }
  }
})

// const store = {
//   debug: true,
//   state: reactive({
//     message: 'Hello!',
//     probject: '项目'
//   }),
  
//   setMessageAction(newValue) {
//     if (this.debug) {
//       console.log('setMessageAction triggered with', newValue)
//     }
    
//     this.state.message = newValue
//   },
  
//   clearMessageAction() {
//     if (this.debug) {
//       console.log('clearMessageAction triggered')
//     }
    
//     this.state.message = ''
//   }
// }

export default store