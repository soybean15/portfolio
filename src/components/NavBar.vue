<template>
  <div class="navbar flex justify-between items-center bg-base px-5 md:px-20">
   
    <diff class="cursor-pointer"/>
  
    <div class="flex-none">
      <ul class="menu flex items-center menu-horizontal px-1">
        
        <li>
          <ThemeSelect />
        </li>
        <li>
          <a
            ><img
              class="w-7"
              :src="
                isDark == 'true'
                  ? require('@/assets/logo/github-mark-white.svg')
                  : require('@/assets/logo/github-mark.svg')
              "
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useThemeStore } from "@/store/theme";
import ThemeSelect from "./ThemeSelect.vue";
import { storeToRefs } from "pinia";

import Diff from './Diff.vue';

export default {
  components: { ThemeSelect ,Diff},
  setup() {
    const themeStore = useThemeStore();
    const { isDark } = storeToRefs(themeStore);

    return {
      isDark,
    };
  },
};
</script>

<style>
</style>