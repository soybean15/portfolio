<template>
  <div
    class="cursor-pointer mx-0.5 tooltip"
    :href="logo.name"
   
    :data-tip="logo.label"
  >
    <a :href="logo.link" target="blank">
      <img
        class="w-6 rounded-md shadow-lg"
        :src="`https://logo.clearbit.com/${logo.name}`"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: ["logo"],
};
</script>

<style>
</style>