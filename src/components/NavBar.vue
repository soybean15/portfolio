<template>
  <div class="navbar bg-base px-5">
    <div class="flex-1 items-center">
      <a class="btn btn-ghost btn-md text-lg">
        <div class="avatar flex items-center cursor-pointer">
          <div class="w-10 rounded">
            <img src="@/assets/logo/lima-bean.png" />
          </div>
          Soybean15
        </div>
        </a
      >
    </div>
    <div class="flex-none">
      <ul class="menu flex items-center menu-horizontal px-1">
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
        <li>
          <ThemeSelect />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useThemeStore } from "@/store/theme";
import ThemeSelect from "./ThemeSelect.vue";
import { storeToRefs } from "pinia";

export default {
  components: { ThemeSelect },
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