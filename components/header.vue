<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

defineEmits(['scrollToSection'])
const drawer = ref(false)
const { mobile } = useDisplay()
</script>

<template>
  <v-app-bar
    app
    color="primary"
    dark
    :scroll-behavior="mobile ? 'none' : 'hide'"
    elevate-on-scroll
    flat
  >
    <v-toolbar-title>mTourzel</v-toolbar-title>
    <v-spacer />
    <!-- Menu hamburger pour mobile -->
    <v-app-bar-nav-icon
      v-if="mobile"
      @click="drawer = !drawer"
    />
    <!-- Liens pour écrans moyens et grands -->
    <div
      v-else
      class="d-sm-flex"
    >
      <v-btn
        text
        class="d-sm-flex"
        @click="$emit('scrollToSection', 'about')"
      >
        À propos
      </v-btn>
      <v-btn
        text
        class="d-sm-flex"
        @click="$emit('scrollToSection', 'experiences')"
      >
        Experiences
      </v-btn>
      <v-btn
        text
        class="d-sm-flex"
        @click="$emit('scrollToSection', 'skills')"
      >
        Skills
      </v-btn>
      <v-btn
        text
        class="d-sm-flex"
        @click="$emit('scrollToSection', 'projects')"
      >
        Projets
      </v-btn>
      <v-btn
        text
        class="d-sm-flex"
        @click="$emit('scrollToSection', 'contact')"
      >
        Contact
      </v-btn>
      <v-divider
        vertical
        color="white"
        class="border-opacity-100"
      />
      <v-btn
        class="mx-2"
        variant="outlined"
        href="CV_MAXIME_TOURZEL_2024.pdf"
        download
      >
        Mon CV
      </v-btn>
    </div>
  </v-app-bar>
  <!-- Menu latéral pour mobile -->
  <v-navigation-drawer
    v-if="mobile"
    v-model="drawer"
    temporary
    location="top"
  >
    <v-list>
      <v-list-item @click="$emit('scrollToSection', 'about'); drawer = false">
        <v-list-item-title>À propos</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$emit('scrollToSection', 'experiences'); drawer = false">
        <v-list-item-title>Experiences</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$emit('scrollToSection', 'skills'); drawer = false">
        <v-list-item-title>Skills</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$emit('scrollToSection', 'projects'); drawer = false">
        <v-list-item-title>Projets</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$emit('scrollToSection', 'contact'); drawer = false">
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
