<template>
  <v-card variant="text" class="section-projects">
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
                <v-btn variant="outlined" color="primary" :href="repository.html_url" target="_blank">
                  GitHub
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>

      <!-- Version avec slide pour les écrans >= md -->
      <v-slide-group v-else show-arrows data-aos="fade-up">
        <v-slide-group-item
          v-for="repository in repositories"
          :key="repository.id"
        >
          <v-card class="mx-3 d-flex flex-column" width="344">
            <v-card-title class="text-decoration-underline">
              {{ repository.name }}
            </v-card-title>
            <v-card-text>{{ repository.description }}</v-card-text>
            <v-spacer />
            <v-card-actions>
              <v-btn variant="outlined" color="primary" :href="repository.html_url" target="_blank">
                GitHub
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-container>
  </v-card>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const runTimeConfig = useRuntimeConfig()
const token = runTimeConfig.public.githubToken

const { data: repositories } = await useFetch('https://api.github.com/users/maximetourzel/repos?per_page=100&sort=updated&direction=desc&type=public', { headers: { Authorization: `token ${token}` } })
</script>

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
