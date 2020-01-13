<template>
  <div class="container pt-32 pb-128">
    <h1 class="mtb-24">Vue Masonry Wall</h1>

    <example-masonry/>

  </div>
</template>

<script>
  import ExampleMasonry from "../components/examples/ExampleMasonry";

  export default {
    components: {
      ExampleMasonry,
    },
  }
</script>

<style lang="less">
  h3 {
    margin-bottom: 8px;
  }

  section {
    margin-bottom: 64px;
  }
</style>
