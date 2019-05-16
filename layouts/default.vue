<template>
  <v-app>
    <!-- <div class="website" :class="$mq">
      <website-nav-bar />
      <div class="website-content website-container" :class="$mq">
        <nuxt />
      </div>
    </div> -->
    <v-content>
      <v-container fluid fill-height class="pa-0 mx-0 mt-0 mb-3">
        <website-nav-bar />
        <div class="website-container website-content" :class="$mq">
          <!-- <v-layout
          fluid
          fill-height
          class="website-container pa-0 ma-0"
          :class="$mq"
        > -->
          <nuxt />
          <!-- </v-layout> -->
        </div>
      </v-container>
    </v-content>
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
.website {
  height: 100vh;
  position: relative;
}

.website-container {
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
    margin-top: 70px;
    height: auto;
  }

  &.desktop {
   margin-top: 100px;
   height: auto;
  }

}
</style>
