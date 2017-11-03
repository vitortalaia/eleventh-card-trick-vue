<template>
  <router-link class="play-button" :to="{ name: 'Trick' }">
    <slot>Start</slot>
  </router-link>
</template>

<script>
export default {
  name: 'play-button'
}
</script>

<style>
.play-button {
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


