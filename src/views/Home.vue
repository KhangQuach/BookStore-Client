<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import NavBar from '../components/NavBar.vue'
import BookCard from '@components/BookCard.vue';
const user = ref({})
const created = async () => {
  const respone = await axios.get('user')
  console.log(respone)
  user.value = respone.data
}

</script>
<template>
  <div>
    <NavBar/>
  </div>
  <div class="container">
    <div class="bg-warning w-100 d-flex justify-content-center align-items-center" style="min-height: 400px;">
      <!-- <img class="d-block cover w-100 h-100" src="../assets/book2.jpg" alt=""> -->
      <div class="text-center px-5" style="width: 750px;"> 
        <h1>Search your book here!</h1>
        <div class="input-group mb-3">
          <input type="text" class="form-control fs-4 " aria-label="Recipient's username" aria-describedby="button-search">
          <button class="btn btn-outline-secondary" type="button" id="button-search">Search</button>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column gap-3 my-5 shadow px-5 py-5">
      <div class="text-center"> 
        <h3>Title Book</h3>
        <div class="d-flex gap-3 overflow-auto w-100 shadow-sm pb-1">
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
        </div>
      </div>
      <div class="text-center"> 
        <h3>Title Book</h3>
        <div class="d-flex gap-3 overflow-auto w-100 shadow-sm pb-1">
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
        </div>
      </div>
      
      
    </div>
  </div>
  
</template>
