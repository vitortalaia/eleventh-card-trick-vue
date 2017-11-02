<template>
  <div class="container">
    <h1 class="title">Eleventh Card Trick</h1>

    <p class="instructions">
      <strong>Instructions:</strong> You'll see twenty-one cards displayed in
      three rows of seven cards each. You need to pick a card and remember it.
      Then, you should click on the button that corresponds to the row on which
      your card is. This process is repeated three times and at the end, your
      card will be revealed!
    </p>

    <router-link class="start-button" :to="{ name: 'Trick' }">
      Start
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'landing-page'
}
</script>

<style scoped>
.container {
  max-width: 50rem;
  text-align: center;
}

.title {
  margin-top: 0;
  margin-bottom: 1.875rem;
  font-family: 'Amatic SC', cursive;
  font-size: 6.25rem;
  font-weight: 700;
  text-shadow: .3125rem .3125rem #a03839;
}

.instructions {
  margin-top: 0;
  margin-bottom: 3.125rem;
  font-size: 1.125rem;
}

.start-button {
  padding: 1rem 5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: .3125rem;
  border-color: #fff;
  border-width: .1875rem;
  border-style: solid;
}
</style>
