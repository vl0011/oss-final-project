<template>
  <main id="main" class="main" :class="store.status ? 'toggle-main-margin':''">
    <div class="pagetitle">
      <h1>Dashboard</h1>
      
      <Breadcrumb>
        <BreadcrumbItem>main</BreadcrumbItem>
        <BreadcrumbItem>main</BreadcrumbItem>
        <BreadcrumbItem>main</BreadcrumbItem>
      </Breadcrumb>
      
      <Dashboard/>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useSideStatus } from "~/stores/frontStatus";
import Breadcrumb from "./Breadcrumb.vue";
import BreadcrumbItem from "./BreadcrumbItem.vue";
import Dashboard from "~/components/Content/Dashboard.vue";

const store = useSideStatus();
</script>

<style scoped>
#main {
  margin-top: 60px;
  padding: 20px 30px;
  transition: all 0.3s;
}

@media (max-width: 1199px) {
  #main {
    padding: 20px;
  }
}

.pagetitle {
  margin-bottom: 10px;
}

.pagetitle h1 {
  font-size: 24px;
  margin-bottom: 0;
  font-weight: 600;
  color: #012970;
}

@media (min-width: 1200px) {

  #main {
    margin-left: 300px;
  }
}

@media (min-width: 1200px) {
  .toggle-main-margin {
    margin-left: 0 !important;
  
  }
}
</style>
