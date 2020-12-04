<template>
  <div
      class="cookie-warning"
      :class="{ cookie__close: closeCookie }"
      uk-alert=""
    >
      <span class="cookie-close" @click="closeCookie = true"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          ratio="1"
        >
          <line
            fill="none"
            stroke="#000"
            stroke-width="1.1"
            x1="1"
            y1="1"
            x2="13"
            y2="13"
          ></line>
          <line
            fill="none"
            stroke="#000"
            stroke-width="1.1"
            x1="13"
            y1="1"
            x2="1"
            y2="13"
          ></line></svg
      ></span>
      <div class="cookie-body">
        Używamy plików cookies, aby nasz serwis lepiej spełniał Państwa
        oczekiwania. Można zablokować zapisywanie plików cookies, zmieniając
        ustawienia przeglądarki.
      </div>
      <div class="cookie-buttons"><div class="clearfix"></div></div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      closeCookie: false
    }
  },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-transform: uppercase;
  font-weight: 600;
}

.cookie-warning {
  padding: 15px 29px 15px 15px;
  position: fixed !important;
  bottom: 20px;
  right: 20px;
  width: 300px;
  font-size: 12px;
  z-index: 9;
  color: #464747 !important;
  border: 6px solid #e6b8d4;
  background: white !important;
}

.cookie__close {
  display: none;
}

.cookie-close {
  position: absolute;
  top: 20px !important;
  right: 10px !important;
  color: inherit;
  opacity: 1 !important;
  cursor: pointer;
}
</style>
