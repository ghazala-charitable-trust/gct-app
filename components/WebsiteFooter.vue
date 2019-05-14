<template>
  <v-footer absolute dark app>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading">{{ $t('footer.subtitle') }}</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-3"
          dark
          icon
        >
          <font-awesome-icon size="lg" :icon="icon" />
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;{{ $t('footer.trademark.year') }} — &nbsp;
        <strong>{{ $t('footer.trademark.name') }}</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: function() {
    return {
      icons: [
        ['fab', 'facebook'],
        ['fab', 'twitter'],
        ['fab', 'google-plus'],
        ['fab', 'linkedin'],
        ['fab', 'instagram']
      ]
    }
  }
}
</script>
