import { createStore } from 'vuex'
import user from './modules/user'
import base from './modules/base'


// Create a new store instance.
const store = createStore({
  strict: true,
  modules: {
     user, base
  },
});

export default store;