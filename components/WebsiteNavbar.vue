<template>
  <v-toolbar
    absolute
    color="teal lighten-3"
    dark
    scroll-off-screen
    scroll-target="#scrolling-techniques"
  >
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title :to="home">{{ $t('title') }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>favorite</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    home() {
      // eslint-disable-next-line no-console
      console.log(this.localePath('index'))
      return this.localePath('index')
    }
  }
}
</script>
