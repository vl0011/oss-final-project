<template>
  
  <div class="card">
    <div class="card-options" @click="destroyThis()">
      <i class="bi bi-x-lg"></i>
    </div>
    <slot/>
  </div><!-- End Default Card -->
</template>

<script setup lang="ts">
const destroyThis = () => {
  
}
</script>

<style scoped>
.card-options{
  display: inline-block;
  position: absolute;
  right: 2px;
  top: 0;
  color: #2c384e;
}

.card-options:hover{
  color: #333333;
  
}

.card {
  position: relative;
  margin-bottom: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
}


.card-img-overlay {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
