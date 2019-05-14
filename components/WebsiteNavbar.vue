<template>
  <div class="nav" :class="$mq">
    <v-container fill-height class="px-0 py-2">
      <v-layout column wrap align-center justify-start>
        <v-btn
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          class="nav-link pa-1 mx-0 my-4"
          active-class="nav-link-active"
          flat
          depressed
          nuxt
        >
          <font-awesome-icon
            rotation="90"
            class="nav-text"
            :class="$mq"
            :icon="link.icon"
          />
          &nbsp;
          <span class="nav-text" :class="$mq">
            {{ link.name }}
          </span>
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
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
  background: -moz-linear-gradient(bottom, #ef2424 0%, #ffe000 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(bottom, #ef2424 0%, #ffe000 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #ef2424 0%, #ffe000 100%);

  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 3000;

  min-width: 30px;
  max-width: 60px;

  &.phone {
     width: 12%;
  }
  &.desktop {
    width: 6%;
  }

}

.nav-link {
  -ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);

  z-index: 6000;
  writing-mode: vertical-rl;
  min-width: 10px !important;
  height: auto !important;
}

.nav-text {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.03em;

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
