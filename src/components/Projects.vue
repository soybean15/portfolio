<template>
  <div class="flex flex-col self-start md:self-center px-3 md:w-[1000px]">
    <div class="px-5 md:px-10">
      <div class="text-2xl md:text-4xl font-bold text-start text-green-500">
        Projects
      </div>

      <div class="grid grid-col-1 md:grid-cols-2 gap-2 py-2">
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
    type: "console",
    stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
  },
  {
    title: "Lucky 9",
    description: "Java console-based Lucky 9 game",
    type: "console",
    stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
  },
  {
    title: "Lover Bot",
    description: "SimpleChat bot on java console",
    type: "console",
    stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
  },
  {
    title: "ConnectFour Console game",
    description:
      "Connect Four Console Game in Java",
    type: "console",
    stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
  },
  {
    title: "Java Swing Pagination",
    description:
      "A public, simple pagination library designed for easy integration into your Java Swing projects.",
    type: "console",
    stacks: [{ name: "java.com", label: "Java", link: "https://java.com" }],
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