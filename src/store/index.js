import Vue from 'vue'
import Vuex from 'vuex'

import { loaderMutations } from '@/store/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFetching: false,
    cards: []
  },

  mutations: { ...loaderMutations }
})
