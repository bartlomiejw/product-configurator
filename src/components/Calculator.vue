<template>
  <div class="navigation">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
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
