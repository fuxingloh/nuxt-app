<!--
  GlobalDialog is created to facilitate the use of dialog through the entire website.
  Global dialog will only allow one dialog to appear at a time.
  All dialog must be registered in this component.
-->
<template>
  <div class="bg-fog fixed position-0 index-dialog flex-center" v-if="active" @click.self.stop.capture="onClose">
    <div>
      <div class="flex-justify-end" v-if="isCloseable">
        <div class="index-elevation absolute p-8 hover-pointer" @click="onClose">
          <div class="elevation-1 border-circle bg-white p-8">
            <icon-cancel class="wh-24px"/>
          </div>
        </div>
      </div>

      <div class="GlobalDialog">
        <loading-dialog v-if="name === 'LoadingDialog'"/>
        <confirmation-dialog v-else-if="name === 'ConfirmationDialog'" v-bind="props"/>

        <portal-target v-else-if="name === 'PortalDialog'" name="PortalDialog"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import LoadingDialog from "../dialog/LoadingDialog";
  import PortalDialog from "../dialog/PortalDialog";
  import ConfirmationDialog from "../dialog/ConfirmationDialog";

  import IconCancel from "../icons/IconCancel";

  export default {
    name: "GlobalDialog",
    components: {
      IconCancel, ConfirmationDialog, PortalDialog, LoadingDialog
    },
    computed: {
      ...mapGetters('dialog', ['name', 'props', 'active']),

      /**
       * Some dialog cannot be closed manually
       * @returns {boolean} whether dialog can be closed manually
       */
      isCloseable() {
        if (this.name === 'LoadingDialog') return false
        if (this.name === 'ConfirmationDialog') return false
        return true;
      }
    },
    watch: {
      /**
       * Watch route change and clear dialog if required.
       */
      $route() {
        this.$store.commit('dialog/clear')
      }
    },
    methods: {
      onClose() {
        if (this.isCloseable) {
          this.$store.commit('dialog/clear')
        }
      },
    }
  }
</script>
