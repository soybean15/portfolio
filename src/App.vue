<template>
  <div :data-theme="activeTheme">
    <NavBar />
    <router-view />

    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { useThemeStore } from "@/store/theme";
import { storeToRefs } from "pinia";
import { useHead } from "@unhead/vue";
import Footer from "./components/Footer.vue";

export default {
  components: { NavBar, Footer },
  setup() {
    const themeStore = useThemeStore();
    const { activeTheme } = storeToRefs(themeStore);
 
    useHead({
      title: "Soybean",
     
      meta: [
   //   { name: 'image',  content: require("@/assets/soybean.png") },
   { name: 'image',  content: " https://user-images.githubusercontent.com/75112014/219864078-581f2bd8-073c-42b9-a7b2-19be0dcaaa90.png"},
      { name: 'description',  content:"My Portfolio" },
      ],
    });
  
    return {
      activeTheme,
    };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
