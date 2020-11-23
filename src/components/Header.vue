<template>
  <div class="navigation">
    <nav class="nav nav-pills nav-justified mb-5">
      <router-link class="nav-link alert-dark" to="/">Wróć na strone główną</router-link>
      <router-link class="nav-link alert-dark" to="/">Fllow.pl</router-link>
      <router-link class="nav-link alert-dark" to="/">MaxStone.pl</router-link>
      <router-link class="nav-link alert-dark" to="/">Wyloguj</router-link>
    </nav>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-transform: uppercase;
  font-weight: 600;
}
</style>
