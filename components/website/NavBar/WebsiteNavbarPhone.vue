<template>
  <v-layout row wrap align-center>
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
  }
}
</script>
