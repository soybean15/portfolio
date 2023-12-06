<template>
 <div :data-theme="activeTheme" >
  <NavBar/>
  <router-view/>

  <Footer/>

  <vue-link-preview
		url="https://vuejs.org/"
		@click="handleClick"
	></vue-link-preview>
 </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import {useThemeStore} from '@/store/theme'
import { storeToRefs } from 'pinia'
import LinkPreview from "@ashwamegh/vue-link-preview";
import Footer from './components/Footer.vue'
export default{
  
  components:{NavBar,Footer,LinkPreview},
  setup(){
    const themeStore = useThemeStore()
    const {activeTheme} =storeToRefs(themeStore)
    return {
      activeTheme
    }
  }

}
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
