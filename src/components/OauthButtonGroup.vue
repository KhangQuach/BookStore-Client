    
<script setup>
import { toast } from 'vue3-toastify';

  const OAuthFacebook = () => {
    
  }
  const OAuthGoogle = () => {

  }
  const OAuthXOAuth = () => {

  }
</script>
<template>
  <div class="my-5">-------------or-------------</div>
  <div class="d-grid gap-2 col-6 mx-auto mt-2">
    <button class="btn btn-outline-primary py-2 border-2 fw-medium" @click="OAuthFacebook">LOGIN WITH FACEBOOK</button>
    <button class="btn btn-outline-dark py-2 border-2 fw-medium" @click="OAuthX">LOGIN WITH TWITTER</button>
    <button class="btn btn-outline-danger py-2 border-2 fw-medium" @click="OAuthGoogle">LOGIN WITH GOOGLE</button>
    
  </div>
</template>