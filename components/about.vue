<template>
  <v-card
    variant="flat"
    class="rounded-0 elevation-0"
  >
    <v-container>
      <v-card-title class="text-center text-h5 text-md-h4 mb-6">
        À propos de moi
      </v-card-title>
      <v-row align="start">
        <v-col
          cols="12"
          sm="4"
        >
          <v-img
            src="/img/linkedin.jpg"
            alt="Ma photo"
            width="100%"
            :aspect-ratio="4 / 3"
            data-aos="fade-right"
          />
        </v-col>
        <v-col
          cols="12"
          sm="8"
          data-aos="fade-left"
        >
          <p>Je suis développeur fullstack avec une solide expérience en création d'applications performantes, à la fois en front-end et back-end. J'ai travaillé sur différents projets qui m'ont permis de développer mes compétences techniques, tout en restant à jour avec les nouvelles technologies. Je mets un point d'honneur à écrire du code propre, facile à maintenir, et à optimiser les performances tout en prenant soin de l'expérience utilisateur. Au fil de mon parcours, j'ai eu l'occasion de collaborer avec des équipes variées sur des projets complexes, où j'ai pu résoudre des défis techniques avec une approche axée sur les solutions. Je continue à apprendre et à appliquer les bonnes pratiques du développement.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
