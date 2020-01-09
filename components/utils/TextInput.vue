<template>
  <div>
    <label class="h6">
      {{label}} <span class="error" v-if="required && value === ''">is required</span>
    </label>
    <input v-model.trim="editing"
           :placeholder="placeholder"
           :type="type"
    >
  </div>
</template>

<script>
  export default {
    name: "TextInput",
    props: {
      placeholder: String,
      label: {
        type: String,
        required: true
      },
      value: {
        type: [String, Number],
      },
      required: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    data() {
      return {editing: this.value}
    },
    methods: {
      update() {
        this.$emit('input', this.editing)
      },
    },
    watch: {
      editing() {
        this.update()
      }
    }
  }
</script>

<style scoped lang="less">
  label {
    margin-bottom: 4px;
  }

  input {
    outline: none;
    border: none;

    background: #FAFAFA;
    color: black;

    width: 100%;
    font-size: 17px;
    padding: 12px;
    border-radius: 2px;

    &:focus {
      background: #F0F0F0;
    }
  }
</style>
