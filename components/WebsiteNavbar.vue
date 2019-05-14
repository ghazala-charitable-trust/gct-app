<template>
  <div class="nav">
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
          <font-awesome-icon rotation="90" class="nav-text" :icon="link.icon" />
          &nbsp;
          <span class="nav-text">
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

<style>
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
  width: 6%;
  max-width: 6vh;
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
  font-size: 20px;
  /* margin-left: 17px; */
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.nav-link-active {
  /* color: black; */
  color: white !important;
  transition: 0.2s color ease;
}
</style>
