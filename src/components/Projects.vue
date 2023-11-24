<template>
  <div class="flex flex-col   px-3 md:w-[1000px]">
    <div class="px-5 md:px-10">
      <div class="text-2xl md:text-4xl font-bold text-start text-green-500">
        Projects
      </div>

      <div class="grid  grid-col-1 md:grid-cols-2 gap-2 py-2">
        <div v-for="project in projects" :key="project.title">
          <project :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";

const projects = [
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
    type: "console",
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
    type: "Desktop",
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
    title: "PNHS Realtime biometrics",
    description: "Attendance Monitoring with real time biometrics",
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
  components: { Project },
  setup() {
    return {
      projects,
    };
  },
};
</script>

<style>
</style>