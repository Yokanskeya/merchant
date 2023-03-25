<template>
  <NuxtLink to="/">
    <img class="main-logo mouse-md" :src="'/icon-' + type + '.svg'" :width="size" :height="size">
  </NuxtLink>
</template>

<script setup>

defineProps({
  size: {
    type: Number,
    default: 64
  },
  type: {
    type: String,
    default: 'notext'
  }
});

</script>

<style scoped>

.main-logo {
  display: block;
}

</style>
