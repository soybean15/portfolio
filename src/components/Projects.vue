<template>
  <div class="flex flex-col mt-10   px-3 w-full">
    <div class="px-5 md:px-10">
      <div class="text-2xl py-5 md:text-4xl font-bold text-start text-green-500">
        Projects
      </div>
      <div class="py-2">
        <FilterProject
          :options="[
            'All',
            'Console',
            'Desktop',
            'Web'
          ]"
          @onClick="filterProjects"
        />
         </div>

      <div class="grid  grid-col-1 lg:grid-cols-2  2xl:grid-cols-3 gap-2 py-2">
        <div v-for="project in projects" :key="project.title">
          <project :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import FilterProject from './FilterProject.vue';
import Project from "./Project.vue";

const _projects = [
  {
    title: "CScreen",
    description: "Text-base UI on Console",
    thumbnail:'https://user-images.githubusercontent.com/75112014/183237756-a8ac0d03-fb91-4257-b388-3505bd1547ae.png',
    type: "console",
    stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
    repository: [
      {
        label: "repo",
        link: "https://github.com/soybean15/CScreen",
      },
     
    ],
  },
  {
    title: "Lucky 9",
    description: "Java console-based Lucky 9 game",
    type: "console",
    stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
    thumbnail:'https://user-images.githubusercontent.com/75112014/285388794-43662063-2c72-4f2e-8459-3d6f3d4ec958.png',
    repository: [
      {
        label: "repo",
        link: "https://github.com/soybean15/LuckyNineConsole",
      },
     
    ],
  },
  {
    title: "Lover Bot",
    description: "SimpleChat bot on java console",
    thumbnail:'https://user-images.githubusercontent.com/75112014/285391723-4f743f21-09b9-4b8c-bb14-bb9fac37d672.png',
    type: "console",
    stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
    repository: [
      {
        label: "repo",
        link: "https://github.com/soybean15/LoverBot",
      },
     
    ],
  },
  {
    title: "ConnectFour Console",
    thumbnail:'https://user-images.githubusercontent.com/75112014/285387660-68478624-a962-4293-bad4-634f680681de.png',
    description: "Connect Four Console Game in Java",
    type: "console",
    stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
    repository: [
      {
        label: "repo",
        link: "https://github.com/soybean15/ConnectFour-Console-game-",
      },
     
    ],
  },
  {
    title: "Java Swing Pagination",
    description: "A public, simple pagination library for Java Swing projects.",
    type: "desktop",
    thumbnail:'https://user-images.githubusercontent.com/75112014/219864078-581f2bd8-073c-42b9-a7b2-19be0dcaaa90.png',
    stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
    repository: [
      {
        label: "repo",
        link: "https://github.com/soybean15/Java-swing-pagination",
      },
     
    ],
  },
  {
    title: "PNHS EMS",
    description: "PNHS Management System",
    thumbnail:'https://user-images.githubusercontent.com/75112014/285397230-6acd45af-f459-4199-877c-2910aedcf880.png',
    type: "desktop",
    stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
    repository: [
      {
        label: "repo",
        link: "https://github.com/soybean15/PNHSems",
      },
     
    ],
  },
  {
    title: "PNHS Voting System",
    description: "PNHS Voting System",
    type: "Web",
    thumbnail:'https://user-images.githubusercontent.com/75112014/285394615-f6b3ade9-00db-45f4-9b44-3c3b2929be23.png',
    stacks: [
      { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
      { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
      {
        name: "tailwindcss.com",
        label: "Tailwind",
        link: "https://tailwindcss.com",
      },
      {
        name: "daisyui.com",
        label: "DaisyUi",
        link: "https://daisyui.com",
      },
    ],
    repository: [
      {
        label: "client",
        link: "https://github.com/soybean15/voting-system-fe",
      },
      {
        label: "api",
        link: "https://github.com/soybean15/voting-system-restapihttps://github.com/soybean15/voting-system-restapi",
      },
    ],
  },
  {
    title: "Maxilife Online Appointment And Patient Record",
    description: "Appointment system for Maxilife Clinic",
    thumbnail:'https://user-images.githubusercontent.com/75112014/288383072-b5413536-57bf-42f0-bfc3-1a9722ad0a79.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE4NjMyMjIsIm5iZiI6MTcwMTg2MjkyMiwicGF0aCI6Ii83NTExMjAxNC8yODgzODMwNzItYjU0MTM1MzYtNTdiZi00MmYwLWJmYzMtMWE5NzIyYWQwYTc5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA2VDExNDIwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA1ZTMxNjA5ZTg4NTU1ZTE0NmViMTdhNGVhYTExYTAxZjJiYzA0NjBjOGEwNGQzMzNiYjU2NzY0MjZiMDI0ZWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xhglf0abZqnfH1fqbGBwndjDadgk7wHWUh8g38ZdkLs',
    type: "Web",
    stacks: [
      { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
      { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
      {
        name: "tailwindcss.com",
        label: "Tailwind",
        link: "https://tailwindcss.com",
      },
      { name: "quasar.dev", label: "Quasar", link: "https://quasar.dev" },
    ],
    repository: [
      {
        label: "client",
        link: "https://github.com/soybean15/online-appointment-patient-record-spa",
      },
      {
        label: "private repo",
        link: "https://github.com",
      },
    ],
  },
  {
    title: "PAEC Instructor Schedule Management",
    description: "Managing Employee Schedules",
    thumbnail:'https://user-images.githubusercontent.com/75112014/287516516-485a065d-11e8-4d4f-ac07-73a88956468c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2MDU4MzcsIm5iZiI6MTcwMTYwNTUzNywicGF0aCI6Ii83NTExMjAxNC8yODc1MTY1MTYtNDg1YTA2NWQtMTFlOC00ZDRmLWFjMDctNzNhODg5NTY0NjhjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjAzVDEyMTIxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMxNTkwZTRmZTNlNTIxZDZiODA3YzkxOWUxYTM0ZDdhZWJiZTFmODAwMmY0YzA5YTg4NzM1OGExOWZlNjU3ZjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.EVaHFEzKLqj3HQneF9ugYsJVwfDRSqJyOGMBCXYs6UQ',
    type: "Web",
    stacks: [
      { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
      { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
      {
        name: "tailwindcss.com",
        label: "Tailwind",
        link: "https://tailwindcss.com",
      },
      { name: "quasar.dev", label: "Quasar", link: "https://quasar.dev" },
     
    ],
    repository: [
      {
        label: "client",
        link: "https://github.com/soybean15/paec-instructor-monitoring-client",
      },
      {
        label: "api",
        link: "https://github.com/soybean15/paec-instructor-monitoring-api",
      },
    ],
  },
  {
    title: "PNHS Document control",
    description: "Verify documents with qr code",
    type: "Web",
    thumbnail:'https://user-images.githubusercontent.com/75112014/287519554-fd1a8aac-e045-40e7-98b6-f806e320bdca.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2MDg5ODAsIm5iZiI6MTcwMTYwODY4MCwicGF0aCI6Ii83NTExMjAxNC8yODc1MTk1NTQtZmQxYThhYWMtZTA0NS00MGU3LTk4YjYtZjgwNmUzMjBiZGNhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjAzVDEzMDQ0MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNhNWMzOTNmZmNlOGI2MjlhMDNjMDE1MjVlMjA3OTk0OWZjNjNhZTllMTExNWJlMDllZjllYmZhMmE2MjIwZmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.0HNPmhEL-ZEzgwPX7YnSjhd-mDFSORmQ5UMITVC2ymE',
    stacks: [
      { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
      { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
      {
        name: "tailwindcss.com",
        label: "Tailwind",
        link: "https://tailwindcss.com",
      },
      { name: "quasar.dev", label: "Quasar", link: "https://quasar.dev" },
      { name: "inertiajs.com", label: "Inertiajs", link: "https://inertiajs.com/" },
    ],
    repository: [
      {
        label: "repo",
        link: "https://github.com/soybean15/document-control",
      }
     
    ],
  },
  {
    title: "PNHS Realtime biometrics",
    description: "Attendance Monitoring with real time biometrics",
    type: "Web",
    thumbnail:'https://user-images.githubusercontent.com/75112014/289338431-ac243cf1-e575-4286-a4a0-b8a95c860230.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIxODQ3MjMsIm5iZiI6MTcwMjE4NDQyMywicGF0aCI6Ii83NTExMjAxNC8yODkzMzg0MzEtYWMyNDNjZjEtZTU3NS00Mjg2LWE0YTAtYjhhOTVjODYwMjMwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjEwVDA1MDAyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA1Y2U2OTEyMzA5NzllYTQ2ODU4MzMzMmYxYjkxZTU3MzgzM2VhYmM5NGUzMzJhYmMxNjdkYWNhYmM2MzM2YWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.OCwmF5E0f72iJ3-tV8CNzWIziy_YjucsHVi4TzFGxUk',
    stacks: [
      { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
      { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
      {
        name: "tailwindcss.com",
        label: "Tailwind",
        link: "https://tailwindcss.com",
      },
      { name: "quasar.dev", label: "Quasar", link: "https://quasar.dev" },
      { name: "soketi.app", label: "Soketi", link: "https://docs.soketi.app/" },
    ],
    repository: [
      {
        label: "client",
        link: "https://github.com/soybean15/realtime-biometrics-client",
      },
      {
        label: "api",
        link: "https://github.com/soybean15/realtime-biometrics-api",
      },
    ],
  },
];
export default {
  components: { Project,FilterProject },
  setup() {

    const projects = ref(_projects)
    return {
      projects,
      filterProjects:(val)=>{

        if(val==='All'){
          projects.value = _projects
        }else{
          projects.value = _projects.filter(e=>e.type.toLowerCase() ===val.toLowerCase())

        }

      }
    };
  },
};
</script>

<style>
</style>