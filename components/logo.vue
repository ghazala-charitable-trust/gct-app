<template>
  <div :class="config.class">
    <v-card align-center>
      <v-img
        :height="config.height"
        :width="config.width"
        alt="Logo"
        :src="url"
        round
      ></v-img>
    </v-card>
  </div>
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
    },
    url() {
      return `https://source.unsplash.com/collection/789734/256z256`
    }
  }
}
</script>
