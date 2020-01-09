<template>
  <section>
    <h3>API via @nuxtjs/axios</h3>
    <p>Data: {{value}}</p>
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
      return this.$axios.$get('/api/hello', {params: {world: 'Not World'}})
        .then(value => {
          this.value = value
        })
    },
  }
</script>
