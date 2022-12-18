<template>
  <img :src="src" class="card-img-top" :alt="alt">
</template>

<script setup lang="ts">
const props = defineProps({
  src:String,
  alt:{
    type:String,
    default:'...'
  }
})
</script>

<style scoped>

</style>
