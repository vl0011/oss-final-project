<template>
  <li class="breadcrumb-item" :class="isActive?'active':''">
    <a v-if="href !== ''" :href="href"><slot/></a>
    <slot v-else/>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  href:{
    type: String,
    default: ""
  },
  isActive:{
    type: Boolean
  }
})
</script>

<style scoped>

</style>
