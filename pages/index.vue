<template>
  <div class="container pt-32 pb-128">
    <h1>Nuxt App Features</h1>

    <example-spinner/>
    <example-axios/>
    <example-api/>
    <example-path/>
  </div>
</template>

<script>
  import ExampleAxios from "../components/examples/ExampleAxios";
  import ExampleSpinner from "../components/examples/ExampleSpinner";
  import ExampleApi from "../components/examples/ExampleApi";
  import ExamplePath from "../components/examples/ExamplePath";

  export default {
    components: {ExamplePath, ExampleApi, ExampleSpinner, ExampleAxios},
  }
</script>

<style lang="less">
  h3 {
    margin-top: 24px;
    margin-bottom: 8px;
  }
</style>
