<template>
  <table>
    <tbody>
      <template v-for="(_, rowIndex) in numberOfRows">
        <tr :key="rowIndex">
          <td>
            <button class="row-button" @click="chooseRow(rowIndex)">
              {{ rowIndex + 1 }}
            </button>
          </td>

          <template v-for="(column, columnIndex) in columns">
            <td class="card" :key="columnIndex">
              <img
                class="card-image"
                :alt="generateCardAlt(column[rowIndex])"
                :title="generateCardAlt(column[rowIndex])"
                :src="column[rowIndex].image"
              >
            </td>
          </template>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'cards-table',

  props: [
    'numberOfRows',
    'columns'
  ],

  methods: {
    generateCardAlt (card) {
      return `${this.capitalize(card.value)} of ${card.suit.toLowerCase()}`
    },

    capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    },

    chooseRow (rowIndex) {
      this.$emit('chooseRow', rowIndex)
    }
  }
}
</script>

<style scoped>
  .row-button {
  margin-right: 1rem;
  padding: .5rem 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  appearance: none;
  outline: none;
  background-color: transparent;
  border-radius: .3125rem;
  border-width: .1875rem;
  border-style: solid;
  border-color: #fff;
  cursor: pointer;
}

.card {
  padding: .3125rem;
}

.card-image {
  width: 5.625rem;
  border-radius: .3125rem;
  box-shadow: .3125rem .3125rem #a03839;
}
</style>
