import { createStore } from 'vuex'
import test from './test'
import home from './home'
import search from './search'
import detail from './detail'
import cart from './cart'
import login from './login'


export default createStore({
  modules: {
    test,
    home,
    search,
    detail,
    cart,
    login
  }
})
