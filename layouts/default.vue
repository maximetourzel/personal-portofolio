<template>
  <div>
    <v-app>
      <v-app-bar title="Application" class="bg-teal-lighten-5">
        <template #append>
          <v-btn variant="plain" to="/" selected-class="nav-btn-active">
            A propos
          </v-btn>
          <v-btn variant="plain" to="/experience" nuxt selected-class="nav-btn-active">
            Expérience
          </v-btn>
          <v-btn variant="plain" to="/contact" selected-class="nav-btn-active">
            Contact
          </v-btn>
          <v-btn variant="outlined" color="teal-darken-4">
            Mon CV
          </v-btn>
        </template>
      </v-app-bar>
      <v-main>
        <slot />
      </v-main>
    </v-app>
  </div>
</template>

<style scoped>
.nav-btn-active {
  text-decoration: underline;
}
</style>
