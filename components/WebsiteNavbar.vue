<template>
  <v-toolbar fixed color="transparent" dark app>
    <v-toolbar-title class="black--text showPointer" :to="home">{{
      $t('title')
    }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-up">
      <v-btn class="black--text" :to="about" flat>{{
        $t('navbar.about')
      }}</v-btn>
      <v-btn class="black--text" flat>Link Two</v-btn>
      <v-btn class="black--text" flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    home() {
      return this.localePath('index')
    },
    about() {
      return this.localePath('about')
    }
  }
}
</script>

<style>
.showPointer {
  cursor: pointer;
}
</style>
