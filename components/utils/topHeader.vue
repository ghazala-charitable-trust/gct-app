<template>
  <v-container fluid xs12 class="ribbon ma-0 pa-0">
    <v-layout justify-center class="pa-2">
      <span
        :class="$mq === 'phone' ? 'title' : 'display-2'"
        :style="styleObject"
        >{{ $t('title') }}</span
      >
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      styleObject: { 'font-family': 'Josefin Sans !important' }
    }
  }
}
</script>

<style lang="stylus" scoped>
.ribbon {
  background-color: $shades.red;

  /* background-color: $shades.abyss */
  background: -moz-linear-gradient(right, $shades.red 0%, $shades.yellow 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(right, $shades.red 0%, $shades.yellow 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, $shades.red 0%, $shades.yellow 100%);

}
</style>
