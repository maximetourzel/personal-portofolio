<template>
  <v-card variant="text" class="section-experience">
    <v-container>
      <v-card-title class="text-center text-h5 text-md-h4 mb-6">
        Mes experiences
      </v-card-title>
      <v-timeline align="start" side="end">
        <v-timeline-item
          v-for="(experience, i) in experiences"
          :key="i"
          size="small"
          width="100%"
        >
          <template #icon>
            <v-avatar :image="experience.logo" />
          </template>

          <div data-aos="fade-left">
            <v-card>
              <v-card-item>
                <v-card-title class="text-subtitle-1 text-decoration-underline text-md-h5 text-break mb-4 experience-title">
                  {{ experience.jobTitle }}
                </v-card-title>
                <v-card-subtitle class="d-flex flex-wrap ga-2 ga-sm-6 text-subtitle-2">
                  <div>
                    <v-icon
                      icon="mdi-office-building"
                    />
                    {{ experience.missionCompany }}
                  </div>
                  <div>
                    <v-icon
                      icon="mdi-map-marker"
                    />
                    {{ experience.location }}
                  </div>
                  <div>
                    <v-icon
                      icon="mdi-calendar-month"
                    />
                    {{ experience.dates }}
                  </div>
                </v-card-subtitle>
              </v-card-item>
              <v-card-text>
                <v-list>
                  <v-list-item
                    v-for="(mission, j) in experience.missions"
                    :key="j"
                    prepend-icon="mdi-bullseye-arrow"
                  >
                    {{ mission }}
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-chip-group column>
                  <v-chip
                    v-for="(skill, k) in experience.skills"
                    :key="k"
                    :class="k % 2 == 0 ? 'text-primary' : 'text-secondary'"
                    variant="outlined"
                  >
                    <template #append>
                      <i :class="skill.icon" class="pl-2" />
                    </template>
                    {{ skill.name }}
                  </v-chip>
                </v-chip-group>
              </v-card-actions>
            </v-card>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-card>
</template>

<script setup>
const experiences = [
  {
    logo: 'img/cgi_logo.jpg',
    color: 'cyan',
    year: '2021',
    company: 'CGI',
    jobTitle: 'Consultant Web Full-Stack',
    location: 'Lyon',
    dates: 'Dec 2021 - Oct 2023',
    missionCompany: 'SNCF',
    missions: [
      'Maintenance de diverses applications existantes.',
      'Pilotage et participation au développement de la partie mobile.',
      'Pilotage et contribution à la refonte complète du back-end.',
      'Amélioration des performance et de la scalabilité.'
    ],
    skills: [
      {
        name: 'Angular',
        icon: 'devicon-angularjs-plain'
      },
      {
        name: 'NodeJS',
        icon: 'devicon-nodejs-plain'
      },
      {
        name: 'NestJS',
        icon: 'devicon-nestjs-plain'
      },
      {
        name: 'PostgreSQL',
        icon: 'devicon-postgresql-plain'
      },
      {
        name: 'Jenkins',
        icon: 'devicon-jenkins-line'
      },
      {
        name: 'Jest',
        icon: 'devicon-jest-plain'
      }
    ]
  },
  {
    logo: 'img/cgi_logo.jpg',
    color: 'cyan',
    year: '2021',
    company: 'CGI',
    jobTitle: 'Consultant Web Full-Stack',
    location: 'Lyon',
    dates: 'Dec 2021 - Oct 2023',
    missionCompany: 'Locam',
    missions: [
      'Développement front-end d’une marketplace B2B',
      'Conception, réalisation et déploiement d’API synchrones et asynchrones sur Azure',
      'Implémentation d’API externes (Google, DocuSign)',
      'Tests et revue du code'
    ],
    skills: [
      {
        name: 'NuxtJs',
        icon: 'devicon-nuxtjs-plain'
      },
      {
        name: 'Azure Functions',
        icon: 'devicon-azurefunctions-plain'
      },
      {
        name: 'Azure Queue',
        icon: 'devicon-azurequeue-plain'
      },
      {
        name: 'CosmosDB',
        icon: 'devicon-cosmosdb-plain'
      },
      {
        name: 'SQL Server',
        icon: 'devicon-microsoftsqlserver-plain'
      },
      {
        name: 'ADB2C',
        icon: 'devicon-adb2c-plain'
      },
      {
        name: 'Azure Web Storage',
        icon: 'devicon-azurewebstorage-plain'
      },
      {
        name: 'Azure Devops',
        icon: 'devicon-azuredevops-plain'
      },
      {
        name: 'Jest',
        icon: 'devicon-jest-plain'
      },
      {
        name: 'SonarQube',
        icon: 'devicon-sonarqube-plain'
      }
    ]
  },
  {
    logo: 'img/inetum_logo.png',
    color: 'cyan',
    year: '2021',
    company: 'CGI',
    jobTitle: 'Ingénieur Innovation',
    location: 'Lyon',
    dates: 'Dec 2021 - Oct 2023',
    missionCompany: 'Fablab by Inetum',
    missions: [
      'Participation à l\'élaboration des architectures projets clients et internes (Staubli, Tous pour la santé, Poc internes).',
      'Analyse de marché et étude des tendances sur divers sujets innovants (AIOPS)',
      'Mise en production sur les machines du client.'
    ],
    skills: [
      {
        name: 'VueJs',
        icon: 'devicon-vuejs-plain'
      },
      {
        name: 'Angular',
        icon: 'devicon-angularjs-plain'
      },
      {
        name: 'NodeJS',
        icon: 'devicon-nodejs-plain'
      },
      {
        name: 'Azure',
        icon: 'devicon-azure-plain'
      },
      {
        name: 'Docker',
        icon: 'devicon-docker-plain'
      },
      {
        name: 'Python',
        icon: 'devicon-python-plain'
      }
    ]
  }
]
</script>
