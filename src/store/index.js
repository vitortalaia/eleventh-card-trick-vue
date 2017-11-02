import Vue from 'vue'
import Vuex from 'vuex'

import { loaderMutations, cardMutations } from '@/store/mutations'
import { trickActions } from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFetching: false,
    cards: []
  },

  mutations: { ...loaderMutations, ...cardMutations },

  actions: { ...trickActions }
})
