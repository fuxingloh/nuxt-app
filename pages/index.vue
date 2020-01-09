<template>
  <div class="container pt-48 pb-128">
    <h1>Nuxt App Features</h1>

    <example-spinner/>
    <example-axios/>
    <example-api/>

    <div class="mt-48">
      <h3>And More</h3>
      <ul>
        <li>More 1</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ExampleAxios from "../components/examples/ExampleAxios";
  import ExampleSpinner from "../components/examples/ExampleSpinner";
  import ExampleApi from "../components/examples/ExampleApi";

  export default {
    components: {ExampleApi, ExampleSpinner, ExampleAxios},
  }
</script>

<style lang="less">
  h3 {
    margin-top: 24px;
    margin-bottom: 8px;
  }
</style>
