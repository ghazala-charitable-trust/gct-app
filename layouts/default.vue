<template>
  <v-app>
    <div class="website-container website-data" :class="$mq">
      <website-nav-bar />
      <div class="website-content" :class="$mq">
        <nuxt />
      </div>
    </div>
    <website-footer />
  </v-app>
</template>

<script>
import WebsiteNavBar from '@/components/website/nav-bar/WebsiteNavBar'
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
  height: 100vh;
  position: relative;
}

.website-data {
  &.phone {
    width: 100vw;
    margin-left: 0vw;
    margin-right: 0vw;
  }

  &.desktop {
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
  }
}

.website-content {

  &.phone {
    margin-top: 15vh;
    height: 85vh;
  }

  &.desktop {
   margin-top: 10vh;
   height: 90vh;
  }
}
</style>
