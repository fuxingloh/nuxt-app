<template>
  <div class="Default flex-column">
    <nav-header class="elevation-1"/>
    <div style="height: 64px"/>

    <div class="flex-grow">
      <nuxt/>
    </div>

    <nav-footer class="elevation-2"/>
  </div>
</template>

<script>
  import NavHeader from "../components/layout/NavHeader";
  import NavFooter from "../components/layout/NavFooter";

  export default {
    components: {NavFooter, NavHeader}
  }
</script>

<style scoped lang="less">
  .Default {
    min-height: 100vh;
  }
</style>
