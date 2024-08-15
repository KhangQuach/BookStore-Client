<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import NavBar from '../components/NavBar.vue'
const user = ref({})
const created = async () => {
  const respone = await axios.get('user')
  console.log(respone)
  user.value = respone.data
}
</script>
<template>
  <NavBar/>
  <div class="container-fluid bg-warning-subtle vh-100">

  </div>
  
</template>
