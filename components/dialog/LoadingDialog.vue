<template>
  <div class="dialog-tiny">
    <div class="flex-center">
      <div class="p-24">
        <moon-loader color="#000" size="48px"/>
      </div>
    </div>
  </div>
</template>

<script>
  import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

  export default {
    name: "LoadingDialog",
    components: {
      MoonLoader
    }
  }
</script>
