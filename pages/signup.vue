<template>
  <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">회원가입</h5>
                    <p class="text-center small">회원가입을 위한 정보를 입력해 주세요.</p>
                  </div>

                  <form class="row g-3 " novalidate ref="needs_validation">
                    <div class="col-12">
                      <label for="yourName" class="form-label">이름</label>
                      <input type="text" name="name" class="form-control" id="yourName" required>
                      <div class="invalid-feedback">이름을 입력해 주세요!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">이메일</label>
                      <input type="email" name="email" class="form-control" id="yourEmail" required>
                      <div class="invalid-feedback">이메일 형식 요류!</div>
                    </div>

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
                        <input class="form-check-input" type="checkbox" value="" id="acceptTerms" required>
                        <label class="form-check-label" for="acceptTerms"><a href="#">개인정보 수집 및 이용</a> 에 동의 합니다.
                        </label>
                        <div class="invalid-feedback">회원가입 전 개인정보 수집 이용에 동의해 주세요.</div>
                      </div>
                    </div>
                  </form>

                  <div class="col-12 mt-4 was-validated">
                    <button class="btn btn-primary w-100" :class="signup_feedback" @click="signup()">회원가입</button>
                    <div class="invalid-feedback mb-2 mt-2" style="">{{signup_msg}}</div>
                  </div>
                  
                  <div class="col-12">
                    <p class="small mb-0">계정이 이미 있으신가요? <a href="/login">로그인</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const signup_feedback = ref("")
const signup_msg = ref("")
const needs_validation = ref<any>(null);

const signup = () => {
  needs_validation.value.classList.add("was-validated");
  if (needs_validation.value.checkValidity()) {
    
    let formData = new FormData(needs_validation.value)
    let d:any = {};
    formData.forEach((value, key) => d[key] = value);
    
    fetch("/api/users/signup", {
      method: "POST",
      headers: {
      },
      body: JSON.stringify(d)
    })
      .then(async res => {
        if (res.status == 200) {
          window.location.href = "/login";
        }
        else {
          signup_feedback.value = "is-invalid";
          signup_msg.value = (await res.json())!.message;
        }
        
      })
      .catch(err => {

      });
  }

};

</script>

<style scoped>

</style>
