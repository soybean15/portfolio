<template>
  <div class="p-5 flex border border-base-200 rounded-md">
    <div class="w-1/2 aspect-[16/9]">
      <img src="@/assets/logo/lima-bean.png" />
    </div>

    <div class="px-3 flex flex-col w-1/2 justify-between">
      <div class="flex flex-col">
        <div class="text-left text-lg md:text-md font-bold text-accent">
          {{ project.title }}
        </div>
        <div class="badge badge-ghost">{{ project.type }}</div>
        <div class="text-left text-md md:text-sm">
          {{ project.description }}
        </div>
      </div>

      <div class="flex flex-col items-start">
        <div class="text-accent"> Stacks </div>

        <div class="flex ">

            <div v-for="stack in project.stacks" :key="stack.label">  
                <logo :logo="stack"/>

            </div>

        </div>
        </div>


      
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue';

export default {
  props: ["project"],
  components:{Logo}
};
</script>

<style>
</style>