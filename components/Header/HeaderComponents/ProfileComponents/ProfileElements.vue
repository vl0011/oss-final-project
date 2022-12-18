<template>
  <li>
    <a class="dropdown-item d-flex align-items-center" :href="href">
      <i class="bi" :class="icon"></i>
      <span>{{label}}</span>
    </a>
  </li>
</template>

<script setup lang="ts">

const props = defineProps({
  icon:String,
  label: String,
  href: String,
})

</script>

<style scoped>

</style>
