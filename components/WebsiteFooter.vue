<template>
  <v-footer dark fluid height="auto" :class="$mq">
    <v-layout fluid class="pa-0 ma-0">
      <v-flex fluid>
        <v-card flat class="white--text text-xs-center">
          <v-card-text>
            <v-btn
              v-for="(icon, index) in icons"
              :key="index"
              class="mx-2 white--text"
              icon
            >
              <font-awesome-icon size="lg" :icon="icon" />
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            {{ $t('footer.information') }}
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            &copy;{{ $t('footer.trademark.year') }} — &nbsp;
            <strong>{{ $t('footer.trademark.name') }}</strong>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
