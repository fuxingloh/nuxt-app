<template>
  <nav class="mt-64 pt-32 pb-64">
    <div class="container">

      <div class="flex-1-2-3 m--16">
        <div class="p-16">
          <div class="flex">
            <nuxt-link to="/" class="lh-0">
              <logo width="32px"
                    height="32px"/>
            </nuxt-link>

            <h4 class="ml-16">Nuxt App</h4>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import Logo from "../Logo";

  export default {
    name: "NavFooter",
    components: {Logo},
  }
</script>

<style scoped lang="less">
  nav {
    background: #fff;

    color: #222;
  }

  h4 {
    margin-bottom: 8px;
  }

  a {
    color: white;
    text-decoration: none;

    margin-bottom: 2px;
  }
</style>
