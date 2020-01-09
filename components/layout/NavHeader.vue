<template>
  <div class="Header">
    <div class="container h-100 flex-align-center">
      <nuxt-link to="/" class="lh-0 flex-align-center">
        <logo width="32px"
              height="32px"/>

        <h5 class="ml-16">
          Nuxt App
        </h5>
      </nuxt-link>

      <div class="flex-grow"/>

      <div class="flex-wrap m--8">
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from "../Logo";

  export default {
    name: "NavHeader",
    components: {Logo}
  }
</script>

<style scoped lang="less">
  .Header {
    height: 64px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;

    background: #fff;
  }

  a {
    text-decoration: none;
  }

  h5, h6 {
    color: #222;
  }
</style>
