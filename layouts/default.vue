<template>
  <div class="Default flex-column">
    <nav-header class="elevation-1"/>
    <div style="height: 64px"/>

    <div class="flex-grow">
      <nuxt/>
    </div>

    <global-dialog/>
    <global-notification/>

<!--    <nav-footer class="elevation-2"/>-->
  </div>
</template>

<script>
  import NavHeader from "../components/layout/NavHeader";
  import NavFooter from "../components/layout/NavFooter";
  import GlobalDialog from "../components/layout/GlobalDialog";
  import GlobalNotification from "../components/layout/GlobalNotification";

  export default {
    components: {GlobalNotification, GlobalDialog, NavFooter, NavHeader}
  }
</script>

<style scoped lang="less">
  .Default {
    min-height: 100vh;
  }
</style>
