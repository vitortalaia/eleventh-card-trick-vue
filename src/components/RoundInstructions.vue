<template>
  <p>{{ instruction }}</p>
</template>

<script>
export default {
  name: 'round-instructions',

  props: ['currentRound'],

  computed: {
    instruction () {
      return this.instructions[this.currentRound]
    }
  },

  data () {
    return {
      instructions: [
        `Choose a card, remember it, and click on the button that corresponds to
        the row on which your card is.`,

        `Now, click on the row that the card you've previously chosen is.`,

        `One last time! Click on the row on which your card is.`
      ]
    }
  }
}
</script>

