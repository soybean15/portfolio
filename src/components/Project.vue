<template>
  <div ref="target">
    <Transition name="slide-fade"
      >
      <div class=" p-2 md:p-5 flex border border-base-200 rounded-md"  v-show="targetIsVisible"> 
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
    return {
      target,
      targetIsVisible,
    };
  },
};
</script>

<style>
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