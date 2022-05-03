import { createStore } from 'vuex'
import test from './test'
import home from './home'
import search from './search'
import detail from './detail'


export default createStore({
  modules: {
    test,
    home,
    search,
    detail
  }
})
