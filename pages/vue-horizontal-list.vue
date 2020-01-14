<template>
  <div class="container pt-32 pb-128">
    <example-horizontal-list/>
  </div>
</template>

<script>

  import ExampleHorizontalList from "../components/examples/ExampleHorizontalList";

  export default {
    components: {
      ExampleHorizontalList
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
