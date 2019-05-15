<template>
  <div class="nav" :class="$mq">
    <v-container fluid class="px-0 py-2">
      <v-layout row wrap align-center justify-end>
        <v-menu bottom origin="center center" transition="scale-transition">
          <template v-slot:activator="{ on }">
            <v-btn class="px-2 mx-2 my-2" justify-center dark v-on="on">
              {{ current }}
            </v-btn>
          </template>

          <v-list>
            <v-list-tile v-for="(link, i) in links" :key="i" :to="link.path">
              <v-list-tile-title>{{ link.name }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
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
  computed: {
    current() {
      const data = this.links.find(link => link.path === this.$route.path)
      return data ? data.name : 'Menu'
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

  &.phone {
    font-size: 14px;
  }
  &.desktop {
    font-size: 20px;
  }
}

.nav-link-active {
  /* color: black; */
  color: white !important;
  transition: 0.2s color ease;
}
</style>
