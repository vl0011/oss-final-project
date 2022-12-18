import { defineStore } from "pinia"

export const useSideStatus = defineStore('sideStatus', () => {
  const status = ref(false)

  function change() {
    status.value = !status.value;
  }

  return {status, change}
})

export const useSearchStatus = defineStore('searchStatus', () => {
  const status = ref(false)

  function change() {
    status.value = !status.value;
  }

  return {status, change}
  
})

export const useLoginStatus = defineStore('loginStatus', () => {
  function email() {
    return localStorage.getItem("email")
  }
  
  function loginId() {
    return localStorage.getItem("id")
  }

  function login(id:string, mail:string) {
    localStorage.setItem("id", id)
    localStorage.setItem("email", mail)
  }

  function logout() {
    localStorage.removeItem("id")
    localStorage.removeItem("email")
  }

  return {email, loginId, login, logout}
})
