<template>
  <details>
    <summary>Themes</summary>
    <ul class="p-2 h-[500px] overflow-auto bg-base-100">
      <li @click="themeStore.changeTheme(theme)" v-for="theme in themes">
        <div class="flex">
          <span> {{ theme }} </span>
          <span class="text-xl text-green-500" v-if="activeTheme == theme"
            >•</span
          >
        </div>
      </li>
    </ul>
  </details>
</template>

<script>
import { useThemeStore } from "@/store/theme";
import { storeToRefs } from "pinia";
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];
export default {
  setup() {
    const themeStore = useThemeStore();
    const { activeTheme } = storeToRefs(themeStore);

    return {
      themes,
      themeStore,
      activeTheme,
    };
  },
};
</script>

<style>
</style>