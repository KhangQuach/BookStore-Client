<script setup>
import axios from 'axios';
import router from 'src/router';


  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push('/login')
  }
  const gotoProfile = () => {
    router.push('/home/user/profile')
  }
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm ">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">Logo Here</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- List Nav -->
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <button class="btn btn-primary" @click="handleLogout">Logout</button>
        <button class="btn btn-secondary" @click="gotoProfile">Profile </button>
      </div>
    </div>
  </nav>
</template>