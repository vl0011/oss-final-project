<template>
  <div class="search-bar" :class="store.status ? 'search-bar-show' : ''">
    <form class="search-form d-flex align-items-center" method="POST" action="#">
      <input type="text" name="query" placeholder="Search" title="Enter search keyword">
      <button type="submit" title="Search"><i class="bi bi-search"></i></button>
    </form>
  </div><!-- End Search Bar -->
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style scoped>
.search-form {
  width: 100%;
}

.search-form input {
  border: 0;
  font-size: 14px;
  color: #012970;
  border: 1px solid rgba(1, 41, 112, 0.2);
  padding: 7px 38px 7px 8px;
  border-radius: 3px;
  transition: 0.3s;
  width: 100%;
}

.search-form input:focus,
.search-form input:hover {
  outline: none;
  box-shadow: 0 0 10px 0 rgba(1, 41, 112, 0.15);
  border: 1px solid rgba(1, 41, 112, 0.3);
}

.search-form button {
  border: 0;
  padding: 0;
  margin-left: -30px;
  background: none;
}

.search-form button i {
  color: #012970;
}

@media (max-width: 1199px) {
  .search-bar {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    padding: 20px;
    box-shadow: 0px 0px 15px 0px rgba(1, 41, 112, 0.1);
    background: white;
    z-index: 9999;
    transition: 0.3s;
    visibility: hidden;
    opacity: 0;
  }

  .search-bar-show {
    top: 60px;
    visibility: visible;
    opacity: 1;
  }
}
.search-bar {
  min-width: 360px;
  padding: 0 20px;
}

</style>

<script setup>
import {useSearchStatus} from "~/stores/frontStatus";

const store = useSearchStatus();
</script>
