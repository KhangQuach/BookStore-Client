<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import NavBar from '../components/NavBar.vue'
import HorizontalBookCard from '@components/HorizontalBookCard.vue';
import { useRoute } from 'vue-router';
import FooterHome from '@components/FooterHome.vue';

const route = useRoute()
const searchInput = ref("")
const books = ref({})
const handleSearch = async () => {
  if(searchInput.value){
    console.log(searchInput.value)
    try {
      const { data } = await axios.get(`/search?bookName=${searchInput.value}`)
      books.value = data
      console.log(books.value)
    }
    catch (error) {
      console.error(error);
    }
  }
}

onMounted(async () => {
  const nameBook = route.query.nameBook
  if(nameBook){
    console.log(nameBook)
    searchInput.value = nameBook
    try {
      const { data } = await axios.get(`/search?bookName=${nameBook}`)
      books.value = data
      console.log(books.value)
    }
    catch (error) {
      console.error(error);
    }
  }
})

</script>
<template>
  <NavBar/>
  <div class="pb-2" style="margin-top: 70px;">
    <div class="container">
      <!-- search Container -->
      <div class=" shadow w-100 d-flex justify-content-center align-items-center mt-4" style="height: 400px; background-color: #fff"  >
        <!-- <img class="d-block cover w-100 h-100" src="../assets/book2.jpg" alt=""> -->
        <div class="text-center px-5" style="width: 750px;"> 
          <h1>Search your book here!</h1>
          <form class="input-group mb-3" @submit.prevent="handleSearch">
            <input type="text" class="form-control fs-4 " aria-label="Recipient's username" aria-describedby="button-search" v-model="searchInput">
            <button class="btn btn-outline-secondary " type="submit" id="button-search">Search</button>
          </form>
        </div>
      </div>
      
      <div class=" shadow p-3 ">
        <h2 class="">Search results :</h2>
        <div class="d-flex flex-row flex-wrap gap-3 justify-content-center ">
          <HorizontalBookCard v-for="(book ,index) in books" :key="index" :book="book"/>
        </div>
      </div>
    </div>
  </div>
  <FooterHome/>
</template>

<style scoped>
  
</style>