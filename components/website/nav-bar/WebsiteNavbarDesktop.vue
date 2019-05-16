<template>
  <v-layout row wrap align-center>
    <v-btn
      v-for="link in links"
      :key="link.name"
      :to="link.path"
      :color="isActive(link.path) ? 'secondary' : link.color"
      class="hide-hover px-2 mx-2 my-2"
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

.hide-hover::before {
  color: transparent
}
</style>
