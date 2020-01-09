<template>
  <div class="container flex-center">
    <div class="flex-column-align-center pt-128 pb-128">
      <logo/>
      <h1 class="mt-8 mb-16">
        nuxt-app
      </h1>
      <h5 class="mt-8">
        Nuxt app template project with my customisation.
      </h5>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style scoped lang="less">

</style>
