<template>
  <div class="container">

    <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div class="card mb-3">
              <div class="card-body">
                <div class="pt-4 pb-2">
                  <h5 class="card-title text-center pb-0 fs-4">계정에 로그인</h5>
                  <p class="text-center small">아이디와 비밀번호를 입력하세요!</p>
                </div>
                <form class="row g-3" novalidate ref="needs_validation" @submit.prevent="login">
                  <div class="col-12">
                    <label for="yourUsername" class="form-label">아이디</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend">@</span>
                      <input type="text" name="username" class="form-control" id="yourUsername" required>
                      <div class="invalid-feedback">아이디를 입력하세요!</div>
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="yourPassword" class="form-label">비밀번호</label>
                    <input type="password" name="password" class="form-control" id="yourPassword" required>
                    <div class="invalid-feedback">비밀번호를 입력하세요!</div>
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                      <label class="form-check-label" for="rememberMe">기억하기</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100" type="submit" :class="signup_feedback">로그인</button>
                    <div class="invalid-feedback mb-2 mt-2" style="">{{ signup_msg }}</div>
                  </div>
                  <div class="col-12">
                    <p class="small mb-0">계정이 없으신가요? <a href="/signup">회원가입</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup lang="ts">
import { useLoginStatus } from "~/stores/frontStatus";

const store = useLoginStatus();

const signup_feedback = ref("");
const signup_msg = ref("");
const needs_validation = ref<any>(null);

const login = () => {
  needs_validation.value.classList.add("was-validated");

  let formData = new FormData(needs_validation.value);
  let d: any = {};
  formData.forEach((value, key) => d[key] = value);

  fetch("/api/users/signin", {
    method: "POST",
    headers: {},
    body: JSON.stringify(d)
  })
    .then(async res => {
      if (res.status == 200) {
        let user = await res.json();
        store.login(user.username, user.email);
        
        window.location.href = "/";
      } else {
        signup_feedback.value = "is-invalid";
        signup_msg.value = (await res.json())!.message;
      }

    })
    .catch(err => {

    });


};

</script>


<style scoped>

</style>
