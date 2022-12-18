<template>
  <div class="card-header"><slot/></div>
</template>

<script>
export default {
  name: "DashboardCardHeader"
};
</script>

<style scoped>
.card-header,
.card-footer {
  border-color: #ebeef4;
  background-color: #fff;
  color: #798eb3;
  padding: 15px;
}
</style>
