<script setup>
import axios from 'axios';
import router from 'src/router';


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    router.push('/login')
  }
  const gotoProfile = () => {
    router.push('/home/user/profile')
  }
  const gotoCart = () => {
    router.push('/home/cart')
  }
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand fw-semibold text-warning" href="/home">BOOK CORNER</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/home"
              class="nav-link"
              active-class="active"
              exact
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/books"
              class="nav-link"
              active-class="active"
            >
              Books
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link"
              active-class="active"
            >
              About
            </router-link>
          </li>
          
        </ul>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- List Nav -->
        </ul>
        <div class="d-flex gap-2">
          <button class="btn btn-primary px-5" @click="handleLogout"><i class="bi bi-box-arrow-left"></i></button>
          <button class="btn btn-warning px-5" @click="gotoCart"><i class="bi bi-cart"></i> </button>
          <button class="btn btn-secondary px-5" @click="gotoProfile"><i class="bi bi-person-circle"></i> </button>
          
        </div>
      </div>
    </div>
  </nav>
</template>