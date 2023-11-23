<template>
  <div ref="target" class="home flex flex-col items-center">
    <hero />

    <Projects/>

    <!-- <div>
      <div>Section in progress...</div>
      <img src="@/assets/ongoing.png" />
    </div> -->
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import { ref } from "vue";

import Projects from '@/components/Projects.vue';
export default {
  name: "HomeView",
  components: {
    Hero,
    Projects
  },
  setup() {
    return {};
  },
};
</script>
<style >
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
</style>