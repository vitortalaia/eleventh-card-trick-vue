import _ from 'lodash'

export const cardGetters = {
  columns: (state) => {
    return _.chunk(state.cards, state.numberOfRows)
  },

  chosenCard: (state) => {
    return state.cards[10]
  }
}
