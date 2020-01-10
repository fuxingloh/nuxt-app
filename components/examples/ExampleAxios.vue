<template>
  <section>
    <h3>Serverless API via @nuxtjs/axios</h3>
    <p class="text-ellipsis-4l">Data: {{value}}</p>
  </section>
</template>

<script>
  export default {
    name: "ExampleAxios",
    data() {
      return {
        value: 'loading...'
      }
    },
    mounted() {
      return this.$axios.$get('/api/hello', {params: {name: 'API via @nuxtjs/axios'}})
        .then(value => {
          this.value = value
        })
    },
  }
</script>
