<script setup>
import { useGoTo } from 'vuetify'

const page = ref()
const goTo = useGoTo()

function scrollToSection(section) {
  let sectionRef = null
  if (section === 'about') {
    sectionRef = page.value.pageRef.about
  }
  else if (section === 'experiences') {
    sectionRef = page.value.pageRef.experiences
  }
  else if (section === 'skills') {
    sectionRef = page.value.pageRef.skills
  }
  else if (section === 'projects') {
    sectionRef = page.value.pageRef.projects
  }
  else if (section === 'contact') {
    sectionRef = page.value.pageRef.contact
  }

  if (sectionRef) {
    goTo(sectionRef, {
      duration: 500,
      offset: -64,
      easing: 'easeInOutCubic',
    })
  }
}
</script>

<template>
  <v-app class="d-flex flex-column">
    <!-- Header Component -->
    <Header @scroll-to-section="scrollToSection" />

    <!-- Contenu principal -->
    <v-main class="flex-grow-1">
      <NuxtPage ref="page" />
    </v-main>

    <!-- Footer Component -->
    <Footer />
  </v-app>
</template>

<style scoped>
.v-app {
  min-height: 100vh;
}
</style>
