<script setup>
import { ref } from 'vue'

const about = ref()
const experiences = ref()
const skills = ref()
const projects = ref()
const contact = ref()

defineExpose({
  about,
  experiences,
  skills,
  projects,
  contact,
})
</script>

<template>
  <div>
    <v-parallax
      src="/img/background-green.jpg"
      class="section-home"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <div class="text-h4 font-weight-thin mb-4">
          Maxime TOURZEL
        </div>
        <h4 class="subheading">
          Développeur Web Fullstack
        </h4>
      </div>
    </v-parallax>

    <!-- Section "À propos de moi" -->
    <About
      ref="about"
      class="section-about"
    />

    <!-- Section Experiences -->
    <Experiences
      ref="experiences"
      class="section-experience"
    />

    <!-- Section "Compétences" -->
    <Skills
      ref="skills"
      class="section-skills"
    />

    <!-- Section "Projets" -->
    <Projects
      ref="projects"
      class="section-projects"
    />

    <!-- Section "Contact" -->
    <Contact
      ref="contact"
      class="section-contact"
    />
  </div>
</template>

<style scoped>
.section-home {
  height: 100vh;
}

.section-about,
.section-experience,
.section-projects,
.section-skills,
.section-contact {
  padding: 1.5rem 1.5rem;
}
</style>
