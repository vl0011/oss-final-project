<template>
  <li class="nav-item dropdown pe-3">

    <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
      <!--      <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">-->
      <span class="d-none d-md-block dropdown-toggle ps-2" v-if="store.loginId() != null">{{ store.loginId() }}</span>
      <span class="d-none d-md-block dropdown-toggle ps-2" v-else>로그인</span>
    </a>

    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
      <li class="dropdown-header">
        <h6 v-if="store.loginId() != null">{{ store.loginId() }}</h6>
        <span v-if="store.loginId() != null">{{ store.email() }}</span>
      </li>
      <li>
        <hr class="dropdown-divider" v-if="store.loginId() != null">
      </li>

      <ProfileElements icon="bi-person" label="프로필" href="#" v-if="store.loginId() != null" />

      <li v-if="store.loginId() == null">
        <hr class="dropdown-divider">
      </li>

      <ProfileElements icon="bi-box-arrow-left" label="로그인" href="/login" v-if="store.loginId() == null" />
      <li>
        <hr class="dropdown-divider">
      </li>
      <ProfileElements icon="bi-box-arrow-left" label="회원가입" href="/signup" v-if="store.loginId() == null" />
      <ProfileElements icon="bi-box-arrow-right" label="로그아웃" href="#" v-if="store.loginId() != null"
                       @click="store.logout();window.location.href='/'" />


    </ul><!-- End Profile Dropdown Items -->
  </li><!-- End Profile Nav -->
</template>


<script setup lang="ts">
import ProfileElements from "~/components/Header/HeaderComponents/ProfileComponents/ProfileElements.vue";
import { useLoginStatus } from "~/stores/frontStatus";

const store = useLoginStatus();
</script>

<style scoped>
.nav-profile {
  color: #012970;
}

.nav-profile span {
  font-size: 14px;
  font-weight: 600;
}

.nav-profile img {
  max-height: 36px;
}

</style>
