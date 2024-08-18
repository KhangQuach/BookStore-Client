<script setup>
  import { ref } from "vue"
  import { RouterLink } from "vue-router"
  import Footer from "@components/Footer.vue"
  import OauthButtonGroup from "@components/OauthButtonGroup.vue"
  import axios from "axios"
  import router from "../router"
import { toast } from "vue3-toastify"
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
    if(password.value !== repeatPassword.value){
      toast.error('Passwords do not match',{
        "position": "bottom-right"
      });
      return;
    }
    if(!email.value){
      toast.error('Email is required',{
        "position": "bottom-right"
      });
      return;
    }
    if(!username.value){
      toast.error('Username is required',{
        "position": "bottom-right"
      });
      return;
    }
    if(!password.value){
      toast.error('Password is required',{
        "position": "bottom-right"
      });
      return;
    }
    const response =  await axios.post("signup", data)
    console.log(response)
    toast.success('Created in successfully',{
        "position": "bottom-right"
      });
    setTimeout(() =>{
      router.push('/')
    },5000)
  }
</script>
<template>
  <div class="">
    <img src="../assets/books-1835753.jpg" alt="" class="position-absolute vw-100 vh-100 z-0">
    <div class="container min-vh-100 d-flex  justify-content-lg-end justify-content-sm-center align-items-center z-1 ">
        <div class=" row shadow bg-light bg-opacity-75 mw-75 z-1 p-5 rounded-3" style="width: 600px;" >
          <!-- column 1 -->
          <div class="col-xl d-flex flex-column justify-content-center align-items-center px-0 my-5">
            <form class=" w-100 d-flex flex-column gap-2 align-items-center" method="post" @submit.prevent="handleSignUp">
              <div class="text-center">
                <p class="h2">Sign up for now!</p>
                <!-- <p>To keep connected with us please login with your personal infor</p> -->
              </div>
              <div class=" d-flex flex-column gap-2 my-3">
                <div class="input-group input-group-lg">
                  <input type="email" class="form-control" placeholder="Email" v-model="email">
                </div>
                <div class="input-group input-group-lg">
                  <input type="text" class="form-control" placeholder="Username" v-model="username">
                </div>
                <div class="input-group input-group-lg">
                  <input type="password" class="form-control" placeholder="Password" v-model="password">
                </div>
                <div class="input-group input-group-lg ">
                  <input type="password" class="form-control" placeholder="Password Repeat" v-model="repeatPassword">
                </div>
              </div>
              <div class="w-100 d-flex align-items-center justify-content-around">
                <div class="form-check my-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="isRemember">
                  <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <button type="submit" class="btn btn-primary btn-lg text-light">Login</button>
              </div>
            </form>
            <div class="d-flex justify-content-around w-100">
              <div><router-link to="/login">Register now</router-link></div>
              <div><a href="">Forgot password ?</a></div>
            </div>
            <OauthButtonGroup/>
            <Footer/>
          </div>
          <!-- column 2 -->
          
        </div>
    </div>
  </div>
</template>