<template>
  <section>
    <h3>Confirmation Dialog</h3>

    <button class="primary" @click="onConfirmation">
      Show Confirmation
    </button>
  </section>
</template>

<script>
  export default {
    name: "ExampleDialog",
    methods: {
      onConfirmation() {
        this.$store.commit('dialog/set', {
          name: 'ConfirmationDialog',
          props: {
            title: 'Are your sure?',
            message: 'By confirming you will...'
          }
        })
      }
    }
  }
</script>
