<script setup>
 import NavBar from '@components/NavBar.vue';
import axios from 'axios';
import router from 'src/router';
import { onMounted, ref } from 'vue';
  const username = ref("")
  const password = ref("")
  const fullname = ref("")
  const email = ref("")
  const phone = ref("")
  const birthday = ref("")
  const age = ref("")
  const gender = ref("")
  const address1 = ref("")
  const address2 = ref("")
  const address3 = ref("")
  onMounted( async () => {
  console.log("onMounted")
  const response = await axios.get('user/getuser/tohyyy')
  console.log(response)
  
  username.value = response.data.username
  password.value = response.data.password
  fullname.value = response.data.fullname
  email.value = response.data.email
  phone.value = response.data.phone || ""
  age.value = response.data.age || ""
  gender.value = response.data.gender || ""
  birthday.value = response.data.birthday.slice(0,10) || ""
  address1.value = response.data.address1 || ""
  address2.value = response.data.address2 || ""
  address3.value = response.data.address3 || ""
  
})
</script>

<template>
  <NavBar/>
  <div class="container-sm ">
    <div class="row shadow-sm vh-100 ">
      <div class="col-3 border-end">
        <div class="text-center " style="margin-top: 70px;"> 
          <img src="../assets/book2.jpg" class="rounded-circle mx-auto d-block " alt="" style="width: 170px;height: 170px;">
          <p class="h4 mt-2">Khang Quach</p>
          <p>quachthieukhang@gmail.com</p>
        </div>
      </div>
      <div class="col-5">
        <h2 class="my-5 mx-5">Profile Settings</h2>
        <form method="put" class="row p-3 d-flex justify-content-center gap-2">
          <div class="row">
            <div class="col mx-0 px-0  mr-3">
              <label for="username" class="form-label">User ID:</label>
              <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="col mx-0 px-0">
              <label for="password" class="form-label">Password:</label>
              <input type="password" class="form-control" id="password" v-model="password">
            </div>
          </div>
          <div class="row">
            <label for="fullname" class="form-label">Full name:</label>
            <input type="text" class="form-control" id="fullname" v-model="fullname">
          </div>
          <div class="row">
            <label for="email" class="form-label">Email:</label>
            <input type="text" class="form-control" id="email" v-model="email">
          </div>
          <div class="row">
            <label for="phone" class="form-label">Phone:</label>
            <input type="tel" class="form-control" id="phone" v-model="phone">
          </div>
          <div class="row">
            <label for="birthday" class="form-label">Birthday:</label>
            <input type="date" class="form-control" id="birthday" v-model="birthday">
          </div>
          <div class="row">
            <div class="col mx-0 px-0 mr-3">
              <label for="age" class="form-label">Age:</label>
              <input type="number" class="form-control" id="age" v-model="age">
            </div>
            <div class="col mx-0 px-0 ">
              <label for="username" class="form-label">Gender:</label>
              <select class="form-control">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div class="row">
            <label for="address1" class="form-label" >Address 1:</label>
            <input type="text" class="form-control" id="address1" v-model="address1">
          </div>
          <div class="row">
            <label for="address2" class="form-label">Address 2:</label>
            <input type="text" class="form-control" id="address2" v-model="address2">
          </div>
          <div class="row">
            <label for="address3" class="form-label">Address 3:</label>
            <input type="text" class="form-control" id="address3" v-model="address3">
          </div>
          
          <div class="d-flex justify-content-center mt-5 mr-5">
            <button class="btn btn-primary px-5">Save Profile</button>
          </div>
        </form>
      </div>
      <div class="col-4 border-start">
        <h2 class="mt-5 ml-5">Description</h2>
        <p class=" p-3">
          Lorem ipsum dolor sit amet consectetur ad
          ipisicing elit. Quia, ab ut voluptatem quaerat iusto
          ratione autem debitis nobis, explicabo impedit facere
          magnam sint, quis libero necessitatibus repudiandae ad
          exercitationem corrupti!
          Lorem ipsum dolor sit amet consectetur ad
          ipisicing elit. Quia, ab ut voluptatem quaerat iusto
          ratione autem debitis nobis, explicabo impedit facere
          magnam sint, quis libero necessitatibus repudiandae ad
          exercitationem corrupti!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  label {
    margin: 0;
    padding: 0;
  }
</style>