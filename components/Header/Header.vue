<template>
  <header id="header" class="header fixed-top d-flex align-items-center">
    <HeaderLogo />
    <i class="bi bi-list toggle-sidebar-btn" @click="store.change();"></i>
    <SearchBar />
    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">
        <Search />
        <Notification />
        <Message />
        <Profile />
      </ul>
    </nav><!-- End Icons Navigation -->

  </header><!-- End Header -->

</template>

<script setup lang="ts">

import HeaderLogo from "~/components/Header/HeaderComponents/HeaderLogo.vue";
import Notification from "~/components/Header/HeaderComponents/Notification.vue";
import Message from "~/components/Header/HeaderComponents/Message.vue";
import Profile from "~/components/Header/HeaderComponents/Profile.vue";
import SearchBar from "~/components/Header/HeaderComponents/SearchBar.vue";
import { useSideStatus } from "~/stores/frontStatus";
import Search from "~/components/Header/HeaderComponents/Search.vue";

const store = useSideStatus();

</script>

<style scoped>



.toggle-sidebar-btn {
  font-size: 32px;
  padding-left: 10px;
  cursor: pointer;
  color: #012970;
}

.header {
  transition: all 0.5s;
  z-index: 997;
  height: 60px;
  box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
  background-color: #fff;
  padding-left: 20px;
  /* Toggle Sidebar Button */
  /* Search Bar */
}
</style>
