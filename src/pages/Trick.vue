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
      'currentRound'
    ]),

    ...mapGetters(['columns'])
  },

  methods: {
    ...mapActions({
      fetchCards: actions.FETCH_CARDS,
      chooseRow: actions.CHOOSE_ROW
    })
  },

  created () {
    this.fetchCards()
  }
}
</script>


<style scoped>
.container {
  max-width: 53.75rem;
  text-align: center;
}

.title {
  margin: 0;
  font-family: 'Amatic SC', cursive;
  font-size: 4.5rem;
  font-weight: 700;
  text-shadow: .3125rem .3125rem #a03839;
}
</style>
