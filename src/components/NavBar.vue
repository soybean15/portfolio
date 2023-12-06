<template>
  <div class="navbar bg-gray-900 bg-opacity-20 fixed flex justify-between items-center bg-base px-5 md:px-20">
   
    <diff class="cursor-pointer"/>
  
    <div class="flex-none">
      <ul class="menu flex items-center menu-horizontal px-1">
        
        <li>
          <ThemeSelect />
        </li>
        <li>
         <a href="https://github.com/soybean15" target="blank"><GithubLogo/></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import ThemeSelect from "./ThemeSelect.vue";
import Diff from './Diff.vue';
import GithubLogo from './GithubLogo.vue';

export default {
  components: { ThemeSelect ,Diff,GithubLogo},
  setup() {


   
  },
};
</script>

<style>
</style>