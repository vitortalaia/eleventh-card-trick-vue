import * as actions from '@/store/action-types'
import * as mutations from '@/store/mutation-types'

export const trickActions = {
  [actions.FETCH_CARDS]: ({ commit }) => {
    commit(mutations.DISPLAY_LOADER)
    commit(mutations.RESET_ROUND)

    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=21')
      .then(response => response.json())
      .then((response) => {
        commit(mutations.SET_CARDS, response.cards)
      })
      .catch((error) => {
        console.error(error)
      })
      .then(() => {
        commit(mutations.HIDE_LOADER)
      })
  },

  [actions.CHOOSE_ROW]: ({ commit, getters }, payload) => {
    const columns = getters.columns
    const rowIndex = payload

    commit(mutations.CHOOSE_ROW, { rowIndex, columns })
    commit(mutations.BUMP_ROUND)

    return Promise.resolve()
  }
}
