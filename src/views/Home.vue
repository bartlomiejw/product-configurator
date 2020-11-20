<template>
  <div class="home h-100">
    <div class="container h-100 d-flex align-items-center">
      <div class="row">
        <div class="col-xl-12">
          <Calculator class="text-center" msg="Choose view of calculator" />
        </div>
        <div class="col-xl-6 fllow-wrapper">
          <router-link class="p-5 text-center" to="/fllow-calc"
            ><img alt="Fllow.pl logo" class="img-fluid" src="../assets/img/fllow.png"
          /></router-link>
        </div>
        <div class="col-xl-6 maxstone-wrapper">
          <router-link class="p-5 text-center" to="/maxstone-calc">
            <img alt="Maxstone.pl logo" class="img-fluid" src="../assets/img/maxstone.png" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue';

export default {
  name: 'Home',
  components: {
    Calculator,
  },
};
</script>
<style lang="scss">
.fllow-wrapper {
  background-color: #eceeef;
}
.maxstone-wrapper {
  background-color: #030303;
}

.fllow-wrapper,
.maxstone-wrapper {
  a {
    display: block;
    position: relative;
    transition-duration: 0.8s;
    transition-property: transform;

    &:hover {
      transform: translateY(-15px); /* move the element up by 5px */

      &:before {
        opacity: 1;
        transform: translateY(15px);
      }
    }
  }
}
</style>
