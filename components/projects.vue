<script setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const repositories = [
  {
    id: 1,
    name: 'personal-portofolio',
    description: 'Ce projet est un portfolio personnel développé avec Nuxt 3 et Vuetify. Il présente mes expériences, mes compétences, mes projets...',
    html_url: 'https://github.com/maximetourzel/personal-portofolio',
  },
  {
    id: 2,
    name: 'bank-transaction-validation',
    description: 'This project is developed as part of a technical test for an interview with Dougs, a French online accounting firm. The objective of this test is to demonstrate the ability to design and implement a bank synchronization system using NestJS technology.',
    html_url: 'https://github.com/maximetourzel/bank-transaction-validation',
  },
  {
    id: 3,
    name: 'social-net',
    description: 'SocialNet est une application de réseau social moderne construite avec NestJS pour le backend et Angular pour le frontend. Elle permet aux utilisateurs de se connecter, de partager du contenu, et d\'interagir avec leurs amis et communautés.',
    html_url: 'https://github.com/maximetourzel/social-net',
  },
]
</script>

<template>
  <v-card
    variant="text"
    class="section-projects"
  >
    <v-container>
      <v-card-title class="text-center text-h5 text-md-h4 mb-6">
        Mes projets
      </v-card-title>

      <!-- Version sans slide pour les écrans < md -->
      <v-row v-if="mobile">
        <v-col
          v-for="repository in repositories"
          :key="repository.id"
          cols="12"
          sm="6"
        >
          <div data-aos="fade-left">
            <v-card>
              <v-card-title class="text-decoration-underline">
                {{ repository.name }}
              </v-card-title>
              <v-card-text>{{ repository.description }}</v-card-text>
              <v-card-actions>
                <v-btn
                  variant="outlined"
                  color="primary"
                  :href="repository.html_url"
                  target="_blank"
                >
                  GitHub
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>

      <!-- Version avec slide pour les écrans >= md -->
      <v-slide-group
        v-else
        show-arrows
        data-aos="fade-up"
      >
        <v-slide-group-item
          v-for="repository in repositories"
          :key="repository.id"
        >
          <v-card
            class="mx-3 d-flex flex-column"
            width="344"
          >
            <v-card-title class="text-decoration-underline">
              {{ repository.name }}
            </v-card-title>
            <v-card-text>{{ repository.description }}</v-card-text>
            <v-spacer />
            <v-card-actions>
              <v-btn
                variant="outlined"
                color="primary"
                :href="repository.html_url"
                target="_blank"
              >
                GitHub
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-container>
  </v-card>
</template>

<style scoped>
.section-projects {
  padding: 24px;
}

.v-slide-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
