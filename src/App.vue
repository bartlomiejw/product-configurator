<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@media (min-width: 1600px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1440px;
  }
}
.nav-pills .nav-link {
  border-radius: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
body {
  background-color: #fff;
  color: #030303;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #030303;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
