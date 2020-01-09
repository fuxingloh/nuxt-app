<template>
  <div class="container pt-48 pb-128">
    <div>
      <h1>Features</h1>
    </div>

    <div>
      <h3>Spinner</h3>
      <spinner/>
    </div>
  </div>
</template>

<script>
  import Spinner from "../components/utils/Spinner";

  export default {
    components: {Spinner}
  }
</script>

<style scoped lang="less">
  h3 {
    margin-top: 24px;
    margin-bottom: 8px;
  }
</style>
