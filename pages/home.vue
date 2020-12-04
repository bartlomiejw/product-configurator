<template>
  <div class="home h-100">
    <div
      class="container h-100 d-flex align-items-center justify-content-center"
    >
      <div class="row">
        <div class="col-xl-12 fllow-wrapper">
          <router-link class="p-5 text-center" to="/fllow-calc"
            ><img
              alt="Fllow.pl logo"
              class="img-fluid"
              src="../assets/img/fllow.png"
          /></router-link>
        </div>
        <div class="col-xl-12 maxstone-wrapper d-none">
          <router-link class="p-5 text-center" to="/maxstone-calc">
            <img
              alt="Maxstone.pl logo"
              class="img-fluid"
              src="../assets/img/maxstone.png"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
