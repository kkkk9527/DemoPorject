import { createStore } from 'vuex'
import test from './test'
import home from './home'
export default createStore({
  modules:{
    test,
    home
  }
})
