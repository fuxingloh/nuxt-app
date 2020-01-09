<template>
  <textarea
    rows="1"
    v-model="val"
    :style="computedStyles"

    @focus="onFocus"
    @blur="onBlur"
    @select="onSelect"
  ></textarea>
</template>
<script>
  export default {
    name: "TextAuto",
    mounted() {
      this.resize()
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      minHeight: {
        type: [Number],
        'default': null
      },
      maxHeight: {
        type: [Number],
        'default': null
      },
      /*
       * Force !important for style properties
       */
      important: {
        type: [Boolean, Array],
        default: false
      }
    },
    data() {
      return {
        val: this.value,
        maxHeightScroll: false
      }
    },
    computed: {
      computedStyles() {
        let objStyles = {}
        objStyles.resize = !this.isResizeImportant ? 'none' : 'none !important'
        if (!this.maxHeightScroll) {
          objStyles.overflow = !this.isOverflowImportant ? 'hidden' : 'hidden !important'
        }
        return objStyles
      },
      isResizeImportant() {
        const imp = this.important
        return imp === true || (Array.isArray(imp) && imp.includes('resize'))
      },
      isOverflowImportant() {
        const imp = this.important
        return imp === true || (Array.isArray(imp) && imp.includes('overflow'))
      },
      isHeightImportant() {
        const imp = this.important
        return imp === true || (Array.isArray(imp) && imp.includes('height'))
      }
    },
    methods: {
      onFocus() {
        this.resize()
        this.$emit('focus')
      },
      onSelect() {
        this.$emit('select')
      },
      onBlur() {
        this.$emit('blur')
      },
      resize: function () {
        const important = this.isHeightImportant ? 'important' : ''
        this.$el.style.setProperty('height', 'auto', important)
        let contentHeight = this.$el.scrollHeight + 1
        if (this.minHeight) {
          contentHeight = contentHeight < this.minHeight ? this.minHeight : contentHeight
        }
        if (this.maxHeight) {
          if (contentHeight > this.maxHeight) {
            contentHeight = this.maxHeight
            this.maxHeightScroll = true
          } else {
            this.maxHeightScroll = false
          }
        }
        const heightVal = contentHeight + 'px'
        this.$el.style.setProperty('height', heightVal, important)
        return this
      }
    },
    watch: {
      val(val) {
        this.$nextTick(this.resize)
        this.$emit('input', val)
        this.$emit('change', val)
      }
    }
  }
</script>

<style scoped lang="less">
  textarea {
    width: 100%;
    border: none;
    color: rgba(0, 0, 0, 0.75);

    &:focus {
      outline: none;
      color: rgba(0, 0, 0, 0.75);
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
    }
  }
</style>
