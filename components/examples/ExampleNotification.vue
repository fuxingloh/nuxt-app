<template>
  <section>
    <h3>Notification</h3>

    <button class="primary" @click="onMessage">
      Show Message
    </button>

    <button class="error ml-16" @click="onError">
      Show Error
    </button>

    <button class="error ml-16" @click="onExtendedError">
      Show Extended Error
    </button>
  </section>
</template>

<script>
  export default {
    name: "ExampleNotification",
    methods: {
      onMessage() {
        this.$store.dispatch('addMessage', {title: 'Title', message: 'Message'})
      },
      onError() {
        this.$store.dispatch('addError')
      },
      onExtendedError() {
        this.$store.dispatch('addError', {title: 'Title', message: 'Message', timeout: 600000})
      }
    }
  }
</script>
