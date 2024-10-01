<template>
  <v-card class="rounded-0 elevation-0">
    <v-container>
      <v-card-title class="text-center text-h5 text-md-h4 mb-6">
        Compétences Techniques
      </v-card-title>
      <v-row>
        <!-- Frontend -->
        <v-col
          v-for="(group, i) in skillGroups"
          :key="i"
          cols="12"
          sm="6"
        >
          <div class="text-h5" data-aos="zoom-in">
            {{ group.name }}
          </div>
          <v-chip-group column>
            <div
              v-for="(skill, j) in group.skills"
              :key="j"
              data-aos="flip-left"
            >
              <v-chip

                :class="j % 2 == 0 ? 'text-primary' : 'text-secondary'"
              >
                <template #append>
                  <i :class="skill.icon" class="pl-2" />
                </template>
                {{ skill.name }}
              </v-chip>
            </div>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
const skillGroups = [
  {
    name: 'Frontend',
    skills: [
      {
        name: 'Vue',
        icon: 'devicon-vuejs-plain'
      },
      {
        name: 'Nuxt',
        icon: 'devicon-nuxtjs-plain'
      },
      {
        name: 'Vuetify',
        icon: 'devicon-vuetify-plain'
      },
      {
        name: 'Angular',
        icon: 'devicon-angularjs-plain'
      },
      {
        name: 'Angular Material',
        icon: 'devicon-angularmaterial-plain'
      },
      {
        name: 'SASS',
        icon: 'devicon-sass-original'
      },
      {
        name: 'TailwindCSS',
        icon: 'devicon-tailwindcss-plain'
      }
    ]
  },
  {
    name: 'Backend',
    skills: [
      {
        name: 'NodeJS',
        icon: 'devicon-nodejs-plain'
      },
      {
        name: 'NestJS',
        icon: 'devicon-nestjs-plain'
      },
      {
        name: 'MongoDB',
        icon: 'devicon-mongodb-plain'
      },
      {
        name: 'PostgreSQL',
        icon: 'devicon-postgresql-plain'
      },
      {
        name: 'MSSQL',
        icon: 'devicon-microsoftsqlserver-plain'
      },
      {
        name: 'CosmoDB',
        icon: 'devicon-cosmosdb-plain'
      }
    ]
  },
  {
    name: 'Outils & DevOps',
    skills: [
      {
        name: 'Git',
        icon: 'devicon-git-plain'
      },
      {
        name: 'Docker',
        icon: 'devicon-docker-plain'
      },
      {
        name: 'Jenkins',
        icon: 'devicon-jenkins-line'
      },
      {
        name: 'Azure',
        icon: 'devicon-azure-plain'
      },
      {
        name: 'Azure DevOps',
        icon: 'devicon-azuredevops-plain'
      },
      {
        name: 'GitLab',
        icon: 'devicon-gitlab-plain'
      }
    ]
  },
  {
    name: 'Autres Compétences',
    skills: [
      {
        name: 'Python',
        icon: 'devicon-python-plain'
      },
      {
        name: 'TypeScript',
        icon: 'devicon-typescript-plain'
      },
      {
        name: 'Jest',
        icon: 'devicon-jest-plain'
      },
      {
        name: 'SonarQube',
        icon: 'devicon-sonarqube-plain'
      },
      {
        name: 'Agile (Scrum)',
        icon: 'none'
      }
    ]
  }
]
</script>
