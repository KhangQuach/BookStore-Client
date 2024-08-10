    
<script setup>
  const OAuthFacebook = () => {

  }
  const OAuthGoogle = () => {

  }
  const OAuthXOAuth = () => {

  }
</script>
<template>
  <div class="my-4">-------------or-------------</div>
  <div class="d-grid gap-2 col-6 mx-auto mt-2">
    <button class="btn btn-primary py-2 rounded-0" @click="OAuthFacebook">LOGIN WITH FACEBOOK</button>
    <button class="btn btn-dark py-2 rounded-0" @click="OAuthX">LOGIN WITH TWITTER</button>
    <button class="btn btn-danger py-2 rounded-0" @click="OAuthGoogle">LOGIN WITH GOOGLE</button>
  </div>
</template>