<template>
  <v-container fluid fill-height class="pa-0 ma-0">
    <v-layout column>
      <!-- align-center justify-center row -->
      <!-- <v-flex xs3 class="primary--text text-xs-center display-2"
        >Home Page</v-flex
      > -->
      <hero-section />
      <hero-section />
    </v-layout>
  </v-container>
</template>

<script>
import HeroSection from '@/components/website/heroSection'

export default {
  components: {
    HeroSection
  }
}
</script>
