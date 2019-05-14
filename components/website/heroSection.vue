<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <!-- <v-card-title>
          <ribbon :text="$t('title')" />
        </v-card-title> -->
        <v-img
          class="white--text"
          gradient="to bottom right, rgba(239, 36, 36, 0.4), rgba(255, 224, 0, 0.2)"
          min-height="60vh"
          src="website/bg.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <!-- <span class="display-1">{{ $t('title') }}</span> -->
                <!-- <ribbon :text="$t('title')" /> -->
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.img-setup:after {
  opacity: 0.4;
}
</style>
