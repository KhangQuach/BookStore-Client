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
  const handleLogin = async () => {
    console.log("loging...")
    const data = {
      username: username.value,
      password: password.value
    }
    const response = await axios.post("login" ,data)
    console.log(response)
    localStorage.setItem('token', response.data.token)
    if(response.data.success === true){
      toast.success('Logged in successfully',{
        "position": "bottom-right"
      });
      localStorage.setItem('username', username.value)
      setTimeout(() =>{
        router.push('/home')
      },5000)
    }
    else{
      toast.error('Invalid username or password',{
        "position": "bottom-right"
      });
    }
  }
</script>
<template>
  <div class="">
    <img src="../assets/books-1835753.jpg" alt="" class="position-absolute vw-100 vh-100 z-0">
    <div class="container min-vh-100 d-flex  justify-content-lg-end justify-content-sm-center align-items-center z-1 " >
        <div class=" row shadow bg-light bg-opacity-75 mw-75 z-1 p-5 rounded-3" style="width: 600px" >
          <!-- column 1 -->
          <div class="col-xl d-flex flex-column justify-content-center align-items-center px-0 my-5">
            <form class=" w-100 d-flex flex-column gap-3 align-items-center" method="post" @submit.prevent="handleLogin">
              <div class="text-center">
                <p class="h2">Welcome Back!</p>
                <p>To keep connected with us please login with your personal infor</p>
              </div>
              <div class=" d-flex flex-column gap-2 my-3">
                <div class="input-group input-group-lg ">
                  <input type="text" class="form-control " placeholder="Username" v-model="username">
                </div>
                <div class="input-group input-group-lg ">
                  <input type="password" class="form-control " placeholder="Password" v-model="password">
                </div>

              </div>
              <div class="w-100 d-flex align-items-center justify-content-around">
                <div class="form-check my-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="isRemember">
                  <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <button type="submit" class="btn btn-primary btn-lg text-light ">Login</button>
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
          
        </div>
    </div>
  </div>
</template>