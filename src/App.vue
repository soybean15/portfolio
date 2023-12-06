<template>
 <div :data-theme="activeTheme" >
  <NavBar/>
  <router-view/>

  <Footer/>




 </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import {useThemeStore} from '@/store/theme'
import { storeToRefs } from 'pinia'
import { useHead } from '@unhead/vue'
import Footer from './components/Footer.vue'

export default{
  
  components:{NavBar,Footer},
  setup(){
    const themeStore = useThemeStore()
    const {activeTheme} =storeToRefs(themeStore)


useHead({
  title: 'My awesome site'
})
    return {
      activeTheme,
      
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
