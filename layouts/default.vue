<template>
  <v-app>
    <website-nav-bar />
    <nuxt />
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

<style>
html {
  padding-bottom: 0;
}
</style>
