<template>
  <v-app>
    <div class="website-container">
      <website-nav-bar />
      <v-content class="website-content">
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

<style>
.website-container {
  min-height: 100vh;
  position: relative;
}

.website-content {
  min-height: 100vh;
  width: 94%;
  margin-left: 6%;
}

@media screen and (max-width: 800px) {
  .nav {
    width: 12%;
  }
  .website-content {
    margin-left: 12%;
    width: 88%;
  }
  .nav-text {
    font-size: 10px !important;
  }
}
</style>
