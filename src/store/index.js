import Vue from 'vue'
import Vuex from 'vuex'

import { loaderMutations } from '@/store/mutations'
import { trickActions } from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFetching: false,
    cards: []
  },

  mutations: { ...loaderMutations },

  actions: { ...trickActions }
})
