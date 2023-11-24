<template>
<div ref="target"  > 
    <Transition name="slide-fade">
  
      <div class=" p-2 md:p-5   flex flex-col md:flex-row border border-base-200 rounded-md"  v-if="targetIsVisible"> 
        <div class="w-full  bg-slate-500 md:w-[40%] flex "> 
          <img  class="  border-2 w-full aspect-video rounded-lg" :src="project.thumbnail ?? require('@/assets/ongoing.png')" />
        </div>

        <div class="px-3 mt-2  md:mt-0 flex flex-col md:w-[60%] justify-between">
          <div class="flex  flex-col">

            <div class="text-left text-lg md:text-md font-bold text-accent">
              {{ project.title }}
            </div>
            
            <div class="badge badge-ghost">{{ project.type }}</div>

            <div class="text-left text-md md:text-sm">
              {{ project.description }}
            </div>
            <div class="flex py-1" v-if="project.repository">
              <div class="tooltip" :data-tip="repo.label" v-for="repo in project.repository" :key="repo.label">
                <button class="btn btn-xs btn-ghost">    <GithubLogo :size="'1.5em'"/> </button>
              </div>
              
            </div>
            
          </div>

          <div class="flex flex-col items-start">
            <div class="text-accent">Stacks</div>

            <div class="flex">
              <div v-for="stack in project.stacks" :key="stack.label">
                <logo :logo="stack" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>

import Logo from "./Logo.vue";
import { ref } from "vue";
import { useElementVisibility } from '@vueuse/core'

import GithubLogo from './GithubLogo.vue';
export default {
  props: ["project"],
  components: { Logo,GithubLogo },
  setup(){
    const target = ref(null)
    const targetIsVisible = useElementVisibility(target)

    return {
      target,
      targetIsVisible,
    }
  }


};
</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>