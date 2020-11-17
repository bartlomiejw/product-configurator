<template>
  <div class="maxstone-calc">
    <div class="container h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-xl-12">
          <Calculator msg="Choose view of calculator" />
          <div class="container mt-5">
            <div class="row text-center">
              <div class="col-6 fllow-wrapper">
                <router-link class="p-5 text-center" to="/fllow-calc"
                  ><img
                    alt="Fllow.pl logo"
                    class="img-fluid"
                    src="../assets/fllow.png"
                /></router-link>
              </div>
              <div class="col-6 maxstone-wrapper">
                <router-link class="p-5 text-center" to="/maxstone-calc">
                  <img
                    alt="Maxstone.pl logo"
                    class="img-fluid"
                    src="../assets/maxstone.png"
                  />
                </router-link>
              </div>
            </div>
          </div>
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
  background-color: #ECEEEF;
}
.maxstone-wrapper {
  background-color: #030303;
}
a {
  display: block;
  position: relative;
  transition-duration: 1s;
  transition-property: transform;
  &:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0) 80%
    ); /* W3C */
    transition-duration: 1s;
    transition-property: transform opacity;
  }

  &:hover {
    transform: translateY(-5px); /* move the element up by 5px */

    &:before {
      opacity: 1;
      transform: translateY(5px);
    }
  }
}
</style>
