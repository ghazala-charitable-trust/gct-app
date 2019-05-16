<template>
  <v-card :height="navHeight" class="website-container nav" :class="$mq">
    <v-container fluid row class="px-0 py-2">
      <v-layout fluid class="ma-0 pa-0" align-center>
        <logo />
        <v-layout fluid class="ma-0 pa-0" xs11 justify-end>
          <mq-layout mq="phone">
            <phone-nav-bar :links="links"></phone-nav-bar>
          </mq-layout>
          <mq-layout mq="desktop+">
            <desktop-nav-bar :links="links"></desktop-nav-bar>
          </mq-layout>
        </v-layout>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import Logo from '@/components/logo'
import DesktopNavBar from '@/components/website/nav-bar/WebsiteNavbarDesktop'
import PhoneNavBar from '@/components/website/nav-bar/WebsiteNavbarPhone'

export default {
  components: {
    DesktopNavBar,
    PhoneNavBar,
    Logo
  },
  data() {
    return {
      links: [
        {
          name: 'Home',
          path: this.friendlyLink('index'),
          icon: 'home'
        },
        {
          name: 'About',
          path: this.friendlyLink('about'),
          icon: 'info'
        },
        {
          name: 'Goals',
          path: this.friendlyLink('goals'),
          icon: 'bullseye'
        },
        {
          name: 'Advice',
          path: this.friendlyLink('advice'),
          icon: 'balance-scale'
        },
        {
          name: 'Donate',
          path: this.friendlyLink('donate'),
          icon: 'donate'
        }
      ]
    }
  },
  computed: {
    navHeight() {
      return this.$mq === 'phone' ? '70' : '100'
    }
  },
  methods: {
    friendlyLink(page) {
      return this.localePath(page)
    }
  }
}
</script>

<style lang="stylus">
.nav {
  /* background: -moz-linear-gradient(left, $shades.red 0%, $shades.yellow 100%);
  FF3.6-15
  background: -webkit-linear-gradient(left, $shades.red 0%, $shades.yellow 100%);
  Chrome10-25,Safari5.1-6
  background: linear-gradient(to left, $shades.red 0%, $shades.yellow 100%); */
  position: fixed;
  overflow: hidden;

  left: 0;
  top: 0;
  z-index: 1;
}

.color-me-red {
  background: $shades.red;
}
</style>
