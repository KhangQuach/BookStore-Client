<script setup>
import axios from 'axios';
import router from 'src/router';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
  const route = useRoute()
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
  const isActiveCart = computed(() => route.path.includes('home/cart'));
  const isActiveProfile = computed(() => route.path.includes('home/user/profile'));
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
          <button class="btn btn-danger  px-5" @click="handleLogout"  ><i class="bi bi-box-arrow-left" ></i></button>
          <button class="btn px-5" @click="gotoCart" :class="{'btn-secondary': !isActiveCart, 'btn-warning': isActiveCart}"><i class="bi bi-cart"></i> </button>
          <button class="btn px-5" @click="gotoProfile" :class="{'btn-secondary': !isActiveProfile, 'btn-warning': isActiveProfile}"><i class="bi bi-person-circle"></i> </button>
          
        </div>
      </div>
    </div>
  </nav>
</template>