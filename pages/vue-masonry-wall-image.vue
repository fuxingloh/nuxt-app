<template>
  <div class="container pt-32 pb-128">
    <example-masonry-image/>
  </div>
</template>

<script>
  import ExampleMasonryImage from "../components/examples/ExampleMasonryImage";

  export default {
    components: {
      ExampleMasonryImage,
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
