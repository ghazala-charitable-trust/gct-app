<template>
  <div>
    <mq-layout mq="phone">
      <phone-nav-bar :links="links"></phone-nav-bar>
    </mq-layout>
    <mq-layout mq="tablet+">
      <desktop-nav-bar :links="links"></desktop-nav-bar>
    </mq-layout>
  </div>
</template>

<script>
import DesktopNavBar from '@/components/WebsiteNavbarDesktop'
import PhoneNavBar from '@/components/WebsiteNavbarPhone'

export default {
  components: {
    DesktopNavBar,
    PhoneNavBar
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
  methods: {
    friendlyLink(page) {
      return this.localePath(page)
    }
  }
}
</script>

<style lang="stylus">
.nav {
  /* background-color: $shades.abyss */
  background: -moz-linear-gradient(left, $shades.red 0%, $shades.yellow 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(left, $shades.red 0%, $shades.yellow 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to left, $shades.red 0%, $shades.yellow 100%);

  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>
