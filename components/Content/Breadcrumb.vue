<template>
  <nav>
    <ol class="breadcrumb">
      <slot/>
    </ol>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
.breadcrumb {
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  color: #899bbd;
  font-weight: 600;
}

.breadcrumb a {
  color: #899bbd;
  transition: 0.3s;
}

.breadcrumb a:hover {
  color: #51678f;
}

.breadcrumb .breadcrumb-item::before {
  color: #899bbd;
}

.breadcrumb .active {
  color: #51678f;
  font-weight: 600;
}

</style>
