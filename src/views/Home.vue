<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import NavBar from '../components/NavBar.vue'
import router from 'src/router';
import Row from '@components/Row.vue';
const searchInput = ref("")

const handleSearch = () => {
  router.push(`/home/search/{${searchInput.value}}`)
  console.log(searchInput.value)
}
//Create endpoint
const categoryEnpoints = ['romance','horror','children','mystery','travel','cookbook','thriller','other']
let endpoints  = []
categoryEnpoints.forEach(category => {
  endpoints.push(`http://localhost:3000/book/categories/${category}`)
})

const categories = reactive({values:[]})
// onMounted(async () => {
//   try {
//     console.log(categories)
//     const responses = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
//     responses.forEach((response, index) => {
//       categories.values.push(response.data)
//     });
//   } catch (error) {
//     console.error(error);
//   }
// })
// const categories = reactive(
//   {
//     Romance:[],
//     Horror: [],
//     Children: [],
//     Mystery: [],
//     Travel: [],
//     Cookbook: [],
//     Thriller: [],
//     Other: []
//   }
// )
</script>
<template>
  <div>
    <NavBar/>
  </div>
  <div class="pb-2" >
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
      <Row v-for="(categories,index) in categoryEnpoints" :key="index" :category="categories"/>
    </div>
  </div>
  
</template>

<style scoped>
  
</style>