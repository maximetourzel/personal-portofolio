<script setup>
</script>

<template>
  <v-card class="section-contact">
    <v-container>
      <v-card-title class="text-center text-h5 text-md-h4 mb-6">
        Contactez-moi
      </v-card-title>
      <v-row
        justify="center"
        align="start"
      >
        <v-col
          cols="12"
          md="4"
          class="d-flex align-center"
          data-aos="fade-left"
        >
          <v-icon
            size="large"
            icon="mdi-email"
            color="primary"
          />
          <v-btn
            variant="text"
            mailto="max.tourzel@outlook.fr"
            class="text-none"
          >
            max.tourzel@outlook.fr
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="d-flex align-center"
          data-aos="fade-left"
        >
          <v-icon
            size="large"
            icon="mdi-linkedin"
            color="primary"
          />
          <v-btn
            variant="text"
            color="text-white"
            href="https://www.linkedin.com/in/maxime-tourzel/"
            target="_blank"
            class="text-none"
          >
            linkedin.com/in/maxime-tourzel
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="d-flex align-center"
          data-aos="fade-left"
        >
          <v-icon
            size="large"
            icon="mdi-github"
            color="primary"
          />
          <v-btn
            variant="text"
            href="https://github.com/maximetourzel"
            target="_blank"
            class="text-none"
          >
            github.com/maximetourzel
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="d-flex align-center ga-4"
          data-aos="zoom-in-up"
        >
          <v-btn
            color="primary"
            size="large"
            variant="outlined"
            block
            href="CV_MAXIME_TOURZEL_2024.pdf"
            download
          >
            Mon CV
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
