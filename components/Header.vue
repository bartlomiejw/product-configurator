<template>
  <div class="navigation">
    <nav class="nav nav-pills nav-justified mb-5">
      <a href="https://fllow.pl" target="_blank" class="nav-link alert-dark">Fllow.pl</a>
      <a href="https://maxstone.pl" target="_blank" class="nav-link alert-dark">MaxStone.pl</a>
      <a href="#" class="nav-link alert-dark" @click="onLogout()">Wyloguj</a>
    </nav>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    async onLogout () {
      await this.$apolloHelpers.onLogout()
      this.$router.go('/login')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-transform: uppercase;
  font-weight: 600;
}
</style>
