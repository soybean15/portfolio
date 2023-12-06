<template>
  <div ref="target" class="home flex flex-col items-center py-20 md:py-[140px]">
    <hero />

    <Projects />

    <div>
      <div>
        Development on Progress...
        <img src="@/assets/ongoing2.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import { ref } from "vue";
import { useHead } from "@unhead/vue";
import Projects from "@/components/Projects.vue";
export default {
  name: "HomeView",
  components: {
    Hero,
    Projects,
  },
  setup() {
   
    useHead({
      title: "Soybean",
      
      meta: [
      { name: 'og:image',  content: require("@/assets/soybean.png") },
      ],
    });
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