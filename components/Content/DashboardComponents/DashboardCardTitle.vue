<template>
  <h5 class="card-title">
    <slot />
  </h5>
  <h6 class="timestamp" v-if="time!==''">
    {{ time }}
  </h6>
</template>

<script setup lang="ts">
const props = defineProps({
  time: {
    type: String,
    default: ""
  }
});
</script>

<style scoped>

.timestamp {
  padding: 0 0 10px 0;
  font-size: 12px;
  font-weight: 500;
  color: #012970;
  font-family: "Poppins", sans-serif;

}

.card-title {
  padding: 20px 0 0 0;
  font-size: 18px;
  font-weight: 500;
  color: #012970;
  font-family: "Poppins", sans-serif;
}

.card-title span {
  color: #899bbd;
  font-size: 14px;
  font-weight: 400;
}


</style>
