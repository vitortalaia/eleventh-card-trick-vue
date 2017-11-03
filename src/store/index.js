import Vue from 'vue'
import Vuex from 'vuex'

import { loaderMutations, cardMutations } from '@/store/mutations'
import { trickActions } from '@/store/actions'
import { cardGetters } from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberOfRows: 3,
    cardsPerRow: 7,
    isFetching: false,
    currentRound: 0,
    finalRound: 3,
    cards: []
  },

  mutations: { ...loaderMutations, ...cardMutations },

  actions: { ...trickActions },

  getters: { ...cardGetters }
})
