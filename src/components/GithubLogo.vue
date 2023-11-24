<template>
  <a
    ><img
     
      :src="
        isDark == 'true'
          ? require('@/assets/logo/github-mark-white.svg')
          : require('@/assets/logo/github-mark.svg')
      "
      :style="{width:size ?? '1.75em' }"
  /></a>
</template>

<script>
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/store/theme";
export default {
    props:['size'],

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