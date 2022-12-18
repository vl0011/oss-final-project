<template>
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="src" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src:String
}) 
</script>

<style scoped>

</style>
