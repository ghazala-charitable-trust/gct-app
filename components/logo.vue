<template>
  <v-flex xs1 :class="config.class">
    <v-card>
      <v-img
        src="https://source.unsplash.com/collection/789734/120x60"
        :height="config.height"
        :width="config.width"
        round
      ></v-img>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      phone: {
        height: '40',
        width: '60',
        class: 'px-3'
      },
      desktop: {
        height: '60',
        width: '120',
        class: 'py-2 px-4'
      }
    }
  },
  computed: {
    config() {
      return this.$mq === 'phone' ? this.phone : this.desktop
    }
  }
}
</script>
