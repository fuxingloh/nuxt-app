<template>
  <div class="NotificationList fixed index-overlay" v-if="notifications">
    <div v-for="notification in notifications" :key="notification.id">
      <div class="NotificationBox p-18-24 mb-16 border-4 relative elevation-3 cubic-bezier"
           :class="{
           'bg-white': notification.type === 'message',
           'white bg-error': notification.type === 'error'
           }">
        <div>
          <div class="heading" v-if="notification.title">
            {{notification.title}}
          </div>
          <div class="text" v-if="notification.message">
            {{notification.message}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GlobalNotification",
    computed: {
      notifications() {
        if (this.$store.state.notifications) {
          return this.$store.state.notifications
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .NotificationList {
    right: 0;
    top: 0;
    margin: 24px;
  }

  .NotificationBox {
    width: 300px;

    animation-name: move-down;
    animation-duration: 400ms;

    @keyframes move-down {
      0% {
        bottom: 40px;
      }
      100% {
        bottom: 0;
      }
    }
  }

  @media (max-width: 575.98px) {
    .NotificationList {
      left: 0;
      right: 0;
      margin: 0;
    }

    .NotificationBox {
      width: 100vw;
      border-radius: 0;
      margin: 0;
      border-bottom: 1px solid #222;
    }
  }
</style>
