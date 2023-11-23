<template>
  <div ref="target">

    <Transition name="fade"
      >
      <div class=" p-2 md:p-5 flex border border-base-200 rounded-md"  v-if=" targetIsVisible"> 
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
import { useElementVisibility } from "@vueuse/core";
import Logo from "./Logo.vue";
import { ref } from "vue";

export default {
  props: ["project"],
  components: { Logo },
  setup() {
    const target = ref(null);

  
    const targetIsVisible = useElementVisibility(target);

    console.log(targetIsVisible.value)


  

    
    return {
      target,
      targetIsVisible,
      
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>