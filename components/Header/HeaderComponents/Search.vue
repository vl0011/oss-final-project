<template>
  <li class="nav-item d-block d-lg-none">
    <a class="nav-link nav-icon search-bar-toggle " href="#">
      <i class="bi bi-search" @click="store.change();"></i>
    </a>
  </li>
</template>

<script setup lang="ts">
import {useSearchStatus} from "~/stores/frontStatus";

const store = useSearchStatus();
</script>

<style scoped>
.nav-icon {
  font-size: 22px;
  color: #012970;
  margin-right: 25px;
  position: relative;
}
</style>
