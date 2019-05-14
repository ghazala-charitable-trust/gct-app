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
// import Navigation from '@/components/Navigation'
import WebsiteFooter from '@/components/WebsiteFooter'

export default {
  components: {
    WebsiteNavBar,
    // Navigation,
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
    margin-left: 12%;
    width: 88%;
  }
  &.desktop {
    width: 94%;
    margin-left: 6%;
  }
}
</style>
