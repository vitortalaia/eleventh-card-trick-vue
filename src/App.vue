<template>
  <router-view/>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  color: #fff;
  background-color: #b9514e;
}

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
