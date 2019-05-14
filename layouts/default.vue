<template>
  <v-app>
    <div class="website-container">
      <website-nav-bar />
      <v-content class="website-content" :class="$mq">
        <nuxt />
      </v-content>
    </div>
    <website-footer />
  </v-app>
</template>

<script>
import WebsiteNavBar from '@/components/WebsiteNavBar'
import WebsiteFooter from '@/components/WebsiteFooter'

export default {
  components: {
    WebsiteNavBar,
    WebsiteFooter
  }
}
</script>

<style lang="stylus">
.website-container {
  min-height: 100vh;
  position: relative;
}

.website-content {
  min-height: 100vh;

  &.phone {
    margin-left: 30px;
  }
  &.desktop {
    margin-left: 60px;
  }
}
</style>
