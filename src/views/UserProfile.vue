<script setup>
 import NavBar from '@components/NavBar.vue';
</script>

<template>
  <NavBar/>
  <div class="container-sm ">
    <div class="row shadow vh-100 ">
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
              <input type="text" class="form-control" id="username" >
            </div>
            <div class="col mx-0 px-0">
              <label for="password" class="form-label">Password:</label>
              <input type="password" class="form-control" id="password" >
            </div>
          </div>
          <div class="row">
            <label for="fullname" class="form-label">Full name:</label>
            <input type="text" class="form-control" id="fullname" >
          </div>
          <div class="row">
            <label for="email" class="form-label">Email:</label>
            <input type="text" class="form-control" id="email" >
          </div>
          <div class="row">
            <label for="phone" class="form-label">Phone:</label>
            <input type="tel" class="form-control" id="phone" >
          </div>
          <div class="row">
            <label for="username" class="form-label">Birthday:</label>
            <input type="date" class="form-control" id="username" >
          </div>
          <div class="row">
            <div class="col mx-0 px-0 mr-3">
              <label for="username" class="form-label">Age:</label>
              <input type="number" class="form-control" id="username" >
            </div>
            <div class="col mx-0 px-0 ">
              <label for="username" class="form-label">Sex:</label>
              <select class="form-control">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div class="row">
            <label for="address1" class="form-label">Address 1:</label>
            <input type="text" class="form-control" id="address1" >
          </div>
          <div class="row">
            <label for="address2" class="form-label">Address 2:</label>
            <input type="text" class="form-control" id="address2" >
          </div>
          <div class="row">
            <label for="address3" class="form-label">Address 3:</label>
            <input type="text" class="form-control" id="address3" >
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