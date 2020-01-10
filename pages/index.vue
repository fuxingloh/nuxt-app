<template>
  <div class="container pt-32 pb-128">
    <h1 class="mtb-24">Nuxt App Features</h1>

    <example-spinner/>
    <example-axios/>
    <example-api/>
    <example-path/>
    <example-text-auto/>
    <example-text-input/>
    <example-notification/>
    <example-dialog/>
    <example-horizontal-list/>
    <example-masonry/>

  </div>
</template>

<script>
  import ExampleAxios from "../components/examples/ExampleAxios";
  import ExampleSpinner from "../components/examples/ExampleSpinner";
  import ExampleApi from "../components/examples/ExampleApi";
  import ExamplePath from "../components/examples/ExamplePath";
  import ExampleTextAuto from "../components/examples/ExampleTextAuto";
  import ExampleTextInput from "../components/examples/ExampleTextInput";
  import ExampleNotification from "../components/examples/ExampleNotification";
  import ExampleDialog from "../components/examples/ExampleDialog";
  import ExampleHorizontalList from "../components/examples/ExampleHorizontalList";
  import ExampleMasonry from "../components/examples/ExampleMasonry";

  export default {
    components: {
      ExampleMasonry,
      ExampleHorizontalList,
      ExampleDialog,
      ExampleNotification,
      ExampleTextInput, ExampleTextAuto, ExamplePath, ExampleApi, ExampleSpinner, ExampleAxios
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
