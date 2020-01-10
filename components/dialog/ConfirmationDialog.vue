<template>
  <div class="Dialog dialog-tiny">
    <h2 class="mtb-8" v-if="title">{{title}}</h2>
    <p class="mtb-8" v-if="message">{{message}}</p>

    <div class="flex-end mt-16">
      <button class="mr-16" :class="_options.cancel.class" @click="_onCancel">Cancel</button>
      <button :class="_options.confirm.class || 'primary'" @click="_onConfirm">Confirm</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ConfirmationDialog",
    props: {
      title: String,
      message: String,
      options: Object,
      onCancel: Function,
      onConfirm: Function,
    },
    computed: {
      _options() {
        return {
          confirm: {
            class: this.options?.confirm?.class
          },
          cancel: {
            class: this.options?.cancel?.class
          }
        }
      }
    },
    methods: {
      _onCancel() {
        this.$store.commit('dialog/clear')

        if (this.onCancel) {
          this.onCancel()
        }
      },
      _onConfirm() {
        if (this.onConfirm) {
          this.onConfirm()
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .Dialog {
    padding: 16px 24px 24px;
  }
</style>
