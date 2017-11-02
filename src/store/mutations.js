import * as types from '@/store/mutation-types'

export const loaderMutations = {
  [types.DISPLAY_LOADER]: (state) => {
    state.isFetching = true
  },

  [types.HIDE_LOADER]: (state) => {
    state.isFetching = false
  }
}
