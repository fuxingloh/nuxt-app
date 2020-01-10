<template>
  <section>
    <h3>Serverless API via plugins/api</h3>
    <p>Data: {{value}}</p>
  </section>
</template>

<script>
  export default {
    name: "ExampleApi",
    data() {
      return {
        value: 'loading...'
      }
    },
    mounted() {
      return this.$api.get('/hello', {params: {name: 'API via plugins/api'}})
        .then(value => {
          this.value = value
        })
    },
  }
</script>
