<template>
  <div class="container">
    <h1 class="title">And your card is...</h1>

    <div class="revealed-card">
      <img
        class="animated tada"
        width="226"
        height="314"
        :src="chosenCard.image"
      >
    </div>

    <PlayButton>Play again</PlayButton>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters
} from 'vuex'

import PlayButton from '@/components/PlayButton'

export default {
  name: 'reveal',

  components: { PlayButton },

  computed: {
    ...mapState([
      'currentRound',
      'finalRound'
    ]),

    ...mapGetters(['chosenCard'])
  },

  methods: {
    playTada () {
      new Audio('static/tada.mp3').play()
    }
  },

  created () {
    if (this.currentRound !== this.finalRound) {
      return this.$router.push({ name: 'Trick' })
    }

    this.playTada()
  }
}
</script>

<style scoped>
.revealed-card {
  margin-top: 2.5rem;
  margin-bottom: 3.125rem;
}
</style>

