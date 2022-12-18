<template>
  <div class="card-footer"><slot/></div>
</template>

<script>
export default {
  name: "DashboardCardFooter"
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
