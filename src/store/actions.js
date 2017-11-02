import * as actions from '@/store/action-types'
import * as mutations from '@/store/mutation-types'

export const trickActions = {
  [actions.FETCH_CARDS]: ({ commit }) => {
    commit(mutations.DISPLAY_LOADER)

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
  }
}
