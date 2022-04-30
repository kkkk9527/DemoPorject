import { createStore } from 'vuex'
import test from './test'
import home from './home'
import search from './search'


export default createStore({
  modules:{
    test,
    home,
    search
  }
})
