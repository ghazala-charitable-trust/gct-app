<template>
  <v-app>
    <!-- <website-nav-bar /> -->
    <navigation />

    <v-content>
      <nuxt />
    </v-content>
    <website-footer />
  </v-app>
</template>

<script>
// import WebsiteNavBar from '@/components/WebsiteNavBar'
import Navigation from '@/components/Navigation'
import WebsiteFooter from '@/components/WebsiteFooter'

export default {
  components: {
    // WebsiteNavBar,
    Navigation,
    WebsiteFooter
  }
}
</script>

<style>
html {
  padding-bottom: 0;
}
</style>
