<template>
  
  <div
    ref="target"
    class="flex flex-col md:flex justify-around items-start py-10 px-3 md:w-[700px]"
  >
    <Transition name="fade" v-show="targetIsVisible">
      <div class="flex flex-col sm:flex-row items-center">
        <div>
          <img class="w-[1000px]" src="@/assets/logo/lima-bean.png" />
        </div>

        <div class="px-5 md:px-10">
          <div
            class="text-3xl md:text-5xl font-bold text-start text-orange-500"
          >
            Hi I'm Soybean
          </div>
          <p class="text-start text-md md:text-lg py-2">
            Aspiring web developer, student, currently mastering Vue.js and
            Laravel. Passionate about creating dynamic web applications and
            staying updated on industry trends. Excited about the creative
            possibilities offered by Vue.js and Laravel.
          </p>
          <div class="flex py-2">
            <div class="cursor-pointer mx-0.5 tooltip" :href="logo.name"  v-for="logo in logos" :key="logo"  :data-tip="logo.label">
              <a :href="logo.link" target="blank"><logo :name="logo.name"/></a>
            </div>
        
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

import Logo from "./Logo.vue";

const logos = [
  { name: "php.net", label: 'PHP', link: "https://php.net" },
  { name: "javascript.com", label: 'JavaScript', link: "https://javascript.com" },
  { name: "java.com", label: 'Java', link: "https://java.com" },
  { name: "laravel.com", label: 'Laravel', link: "https://laravel.com" },
  { name: "vuejs.org", label: 'Vue', link: "https://vuejs.org" },
  { name: "quasar.dev", label: 'Quasar', link: "https://quasar.dev" },
  { name: "tailwindcss.com", label: 'Tailwind', link: "https://tailwindcss.com" },
  { name: 'npmjs.org', label: 'Npm', link: "https://npmjs.org" },
  { name: 'mysql.com', label: 'MySql', link: "https://mysql.com" },
  { name: 'inertiajs.com', label: 'Inertia', link: "https://inertiajs.com" }
];

export default {
  components: { Logo },
  setup() {
    const target = ref(null);
    const targetIsVisible = useElementVisibility(target);

    return {
      target,
      targetIsVisible,
      logos
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>