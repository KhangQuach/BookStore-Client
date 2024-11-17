<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import axios from 'axios'
import NavBar from '../components/NavBar.vue'
import router from 'src/router'
import Row from '@components/Row.vue'
import FooterHome from '@components/FooterHome.vue'

const searchInput = ref("")
const handleSearch = () => {
  router.push({path:`/home/search`,query:{ nameBook: `${searchInput.value}`}})
}


//Create endpoint
const categoryEndpoints = ['romance','horror','children','mystery','travel','cookbook','thriller','other']
let endpoints  = []
categoryEndpoints.forEach(category => {
  endpoints.push(`http://localhost:3000/book/categories/${category}`)
})

</script>
<template>
  <NavBar/>
  <div class="pb-2" >
    <div class="container"  style="margin-top: 70px" >
      <!-- search Container -->
      <!-- <img class="d-block cover w-100 h-100" src="../assets/book2.jpg" alt=""> -->
      <div class=" shadow w-100 d-flex justify-content-center align-items-center mt-4" style="height: 400px" >
        <div class="text-center px-5" style="width: 750px"> 
          <h1>Search your book here!</h1>
          <form class="input-group mb-3" @submit="handleSearch">
            <input type="text" class="form-control fs-4 " aria-label="Recipient's username" aria-describedby="button-search" v-model="searchInput">
            <button class="btn btn-outline-secondary" type="submit" id="button-search">Search</button>
          </form>
        </div>
      </div>
      <Row v-for="(categories,index) in categoryEndpoints" :key="index" :category="categories"/>
    </div>
  </div>
  <FooterHome/>
</template>

<style scoped>
  
</style>