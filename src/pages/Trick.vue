<template>
  <div class="container">
    <h1 class="title">Eleventh Card Trick</h1>

    <RoundInstructions :currentRound="currentRound" />

    <Spinner v-if="isFetching" />

    <CardsTable
      v-else
      :numberOfRows="numberOfRows"
      :columns="columns"
      @chooseRow="chooseRow"
    />
  </div>
</template>

<script>
import {
  mapState,
  mapActions,
  mapGetters
} from 'vuex'

import * as actions from '@/store/action-types'

import Spinner from '@/components/Spinner'
import CardsTable from '@/components/CardsTable'
import RoundInstructions from '@/components/RoundInstructions'

export default {
  name: 'trick',

  components: {
    Spinner,
    CardsTable,
    RoundInstructions
  },

  computed: {
    ...mapState([
      'numberOfRows',
      'cardsPerRow',
      'isFetching',
      'currentRound',
      'finalRound'
    ]),

    ...mapGetters(['columns'])
  },

  methods: {
    ...mapActions({
      fetchCards: actions.FETCH_CARDS
    }),

    chooseRow (rowIndex) {
      this.$store.dispatch(actions.CHOOSE_ROW, rowIndex)
        .then(this.onBumpRound.bind(this))
    },

    onBumpRound () {
      if (this.currentRound === this.finalRound) {
        this.$router.push({ name: 'Reveal' })
      }
    }
  },

  created () {
    this.fetchCards()
  }
}
</script>
