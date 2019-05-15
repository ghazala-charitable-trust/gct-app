<template>
  <div class="nav">
    <v-container fluid class="px-0 py-2">
      <v-layout row wrap align-center justify-end>
        <v-btn
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          :color="isActive(link.path) ? 'white' : 'black'"
          class="px-2 mx-2 my-2"
          nuxt
          flat
          depressed
          justify-center
        >
          <font-awesome-icon size="lg" :icon="link.icon" />
          &nbsp;
          <span class="text-uppercase nav-text" :class="$mq">
            {{ link.name }}
          </span>
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-text {
  letter-spacing: 0.05em;
  font-size: 20px;
}
</style>
