<script setup>
  import { ref } from "vue"
  import router from '../router'
  import { toast } from 'vue3-toastify';
  import { RouterLink } from "vue-router";
  import OauthButtonGroup from "@components/OauthButtonGroup.vue";
  import Footer from "@components/Footer.vue";
import axios from "axios";
  const username = ref("")
  const password = ref("")
  const isRemember = ref(false)
 
  const handleLogin = async() => {
    const data = {
      username: username.value,
      password: password.value,
    }
    const respone = await axios.post("login",data)
    console.log(respone)
    localStorage.setItem('token', respone.data.token)
  }
</script>
<template>
    <div class="container min-vh-100 d-flex justify-content-center align-items-center" >
        <div class=" row shadow-lg  w-100" >
          <!-- column 1 -->
          <div class="col d-flex flex-column justify-content-center align-items-center px-0 my-5">
            <form class=" w-100 d-flex flex-column gap-3 align-items-center" @submit.prevent="handleLogin">
              <div class="text-center">
                <p class="h2">Welcome Back!</p>
                <p>To keep connected with us please login with your personal infor</p>
              </div>
              <div class="input-group input-group-lg  w-50">
                <input type="text" class="form-control" placeholder="Username" v-model="username">
              </div>
              <div class="input-group input-group-lg   w-50">
                <input type="password" class="form-control" placeholder="Password" v-model="password">
              </div>
              <div class="w-100 d-flex align-items-center justify-content-around">
                <div class="form-check my-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="isRemember">
                  <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <button type="submit" class="btn btn-primary btn-lg ">Login</button>
              </div>
            </form>
            <div class="d-flex justify-content-around w-100">
              <div><router-link to="/signup">Register now</router-link></div>
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