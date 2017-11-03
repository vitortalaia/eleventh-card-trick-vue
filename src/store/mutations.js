import _ from 'lodash'

import * as types from '@/store/mutation-types'

export const loaderMutations = {
  [types.DISPLAY_LOADER]: (state) => {
    state.isFetching = true
  },

  [types.HIDE_LOADER]: (state) => {
    state.isFetching = false
  }
}

export const cardMutations = {
  [types.SET_CARDS]: (state, payload) => {
    state.cards = payload
  },

  [types.CHOOSE_ROW]: (state, payload) => {
    const unzippedRows = _.unzip(payload.columns)
    const chosenRow = unzippedRows[payload.rowIndex]
    const [first, last] = _.without(unzippedRows, chosenRow)
    const newRows = [first, chosenRow, last]

    state.cards = _.flatten(newRows)
  },

  [types.BUMP_ROUND]: (state) => {
    state.currentRound++
  },

  [types.RESET_ROUND]: (state) => {
    state.currentRound = 0
  }
}
