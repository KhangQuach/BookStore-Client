<script setup>
  import { ref } from "vue"
  import { RouterLink } from "vue-router"
  import Footer from "@components/Footer.vue"
  import OauthButtonGroup from "@components/OauthButtonGroup.vue"
  import axios from "axios"
  import router from "../router"
  const username = ref("")
  const password = ref("")
  const repeatPassword = ref("")
  const email = ref("")
  const isRemember = ref(false)
  
  const handleSignUp =  async () => {
    const data = {
      username: username.value,
      email: email.value,
      password: password.value,
      repeatPassword: repeatPassword.value,
      remember: isRemember.value,
    }
    const response =  await axios.post("signup", data)
    console.log(response)
    router.push('/')
  }
</script>
<template>
    <div class="container min-vh-100 d-flex justify-content-center align-items-center" dis>
        <div class=" row shadow-lg  w-100" >
          <!-- column 1 -->
          <div class="col d-flex flex-column justify-content-center align-items-center px-0 my-5">
            <form class=" w-100 d-flex flex-column gap-3 align-items-center" @submit.prevent="handleSignUp">
              <div class="h2 mb-4">Sign up</div>
              <div class="input-group input-group-lg  w-50">
                <input type="text" class="form-control" placeholder="Email" v-model="email">
              </div>
              <div class="input-group input-group-lg  w-50">
                <input type="text" class="form-control" placeholder="Username" v-model="username">
              </div>
              <div class="input-group input-group-lg   w-50">
                <input type="password" class="form-control" placeholder="Password" v-model="password">
              </div>
              <div class="input-group input-group-lg   w-50">
                <input type="password" class="form-control" placeholder="Repeat Password" v-model="repeatPassword">
              </div>
              <div class="w-100 d-flex align-items-center justify-content-around">
                <div class="form-check my-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="isRemember">
                  <label class="form-check-label" for="flexCheckDefault">
                    I agree with terms and conditions
                  </label>
                </div>
                <button type="submit" class="btn btn-primary btn-lg">Sign up</button>
              </div>
            </form>
            <div class="d-flex justify-content-around w-100 mt-2">
              <div><router-link to="/login">I am already a member</router-link></div>
              <div><a href="">Forgot password ?</a></div>
            </div>
            <OauthButtonGroup/>
            <Footer/>
          </div>
          <!-- column 2 -->
          <div class="col w-100 bg-dark bg-image px-0 ">
              <img  class="d-block w-100 h-100 " src="../assets/book1.jpg" alt="">
          </div>
        </div>
    </div>
</template>