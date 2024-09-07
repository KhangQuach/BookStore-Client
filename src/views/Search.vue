<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import NavBar from '../components/NavBar.vue'
import BookCardH from '@components/BookCardH.vue';
import { useRoute } from 'vue-router';
import router from 'src/router';
const route = useRoute()
const searchInput = ref("")
const handleSearch = () => {
  router.push({path:`/home/search`,query:{ nameBook: `${searchInput.value}`}})
}
onMounted(()=> {
  const nameBook = route.query.nameBook
  console.log(nameBook)
  searchInput.value = nameBook
})

</script>
<template>
  <NavBar/>
  <div class="pb-2" style="margin-top: 70px;">
    <div class="container">
      <!-- search Container -->
      <div class=" shadow w-100 d-flex justify-content-center align-items-center mt-4" style="height: 400px" >
        <!-- <img class="d-block cover w-100 h-100" src="../assets/book2.jpg" alt=""> -->
        <div class="text-center px-5" style="width: 750px;"> 
          <h1>Search your book here!</h1>
          <form class="input-group mb-3" @submit="handleSearch">
            <input type="text" class="form-control fs-4 " aria-label="Recipient's username" aria-describedby="button-search" v-model="searchInput">
            <button class="btn btn-outline-secondary" type="submit" id="button-search">Search</button>
          </form>
        </div>
      </div>
      
      <div class="row mt-4">
        <h2 class="mx-5">Search results :</h2>
        <div class="col">
          <BookCardH/>
          <BookCardH/>
          <BookCardH/>
        </div>
        <div class="col">
          <BookCardH/>
          <BookCardH/>
          <BookCardH/>
        </div>  
      </div>
    </div>
  </div>
  
</template>

<style scoped>
  
</style>