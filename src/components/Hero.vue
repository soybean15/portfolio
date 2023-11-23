<template>
  <div
    ref="target"
    class="flex flex-col md:flex justify-around items-start py-10 px-3 md:w-[1000px]"
  >
    
      <div class="flex flex-col sm:flex-row items-center" >
        <div>
          <img class="w-[1000px]" src="@/assets/logo/lima-bean.png" />
        </div>

        <div class="px-5 md:px-10">
          <div class="text-3xl md:text-5xl font-bold text-start text-green-500">
            Hi I'm Soybean
          </div>
          <p class="text-start text-md md:text-xl py-2">
            Aspiring web developer and student,I'm diving deep into the world of
            Vue.js and Laravel. I am passionate about creating dynamic web
            applications, and I am enthusiastic about learning and staying
            updated on industry trends. I am willing to learn and explore new
            concepts in web development.
          </p>
          <div class="flex py-2">
            <div v-for="logo in logos" :key="logo">
              <logo :logo="logo" />
            </div>
          </div>
        </div>
      </div>
    
  </div>
</template>

<script>

import { ref,   } from "vue";

import Logo from "./Logo.vue";

const logos = [
  { name: "php.net", label: "PHP", link: "https://php.net" },
  {
    name: "javascript.com",
    label: "JavaScript",
    link: "https://javascript.com",
  },
  { name: "java.com", label: "Java", link: "https://java.com" },
  { name: "laravel.com", label: "Laravel", link: "https://laravel.com" },
  { name: "vuejs.org", label: "Vue", link: "https://vuejs.org" },
  { name: "quasar.dev", label: "Quasar", link: "https://quasar.dev" },
  {
    name: "tailwindcss.com",
    label: "Tailwind",
    link: "https://tailwindcss.com",
  },
  { name: "npmjs.org", label: "Npm", link: "https://npmjs.org" },
  { name: "mysql.com", label: "MySql", link: "https://mysql.com" },
  { name: "inertiajs.com", label: "Inertia", link: "https://inertiajs.com" },
];

export default {
  components: { Logo },
  setup() {

    return{logos}
  },
};
</script>

<style>

</style>