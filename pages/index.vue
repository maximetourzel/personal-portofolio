<template>
  <v-container class="fill-height">
    <v-row align="center">
      <v-col cols="8">
        <div transition="fade-transition" class="text-h1">
          Maxime Tourzel
        </div>
        <div class="text-h4 d-flex">
          Développeur full stack&nbsp;
          <transition name="slide-fade" mode="out-in">
            <div :key="index">
              {{ quality }}
            </div>
          </transition>
        </div>
        Je crée des solutions numériques innovantes et efficaces. Découvrez mon portfolio pour en savoir plus sur mes compétences et mes réalisations. Ensemble, nous pouvons donner vie à vos projets les plus ambitieux !
      </v-col>
      <v-col>
        <v-img
          :width="300"
          aspect-ratio="16/9"
          cover
          src="img/linkedin.jpg"
          class="rounded-circle"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  data: () => ({
    qualities: [
      'passionné',
      'expérimenté',
      'curieux',
      'autonome'
    ],
    quality: '',
    index: 0
  }),
  mounted () {
    this.quality = this.qualities[this.index]
    setInterval(() => {
      if (this.index === this.qualities.length) {
        this.index = 0
      }
      this.quality = this.qualities[this.index++]
    }
    , 5000)
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
