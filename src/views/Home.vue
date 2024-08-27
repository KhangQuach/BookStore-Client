<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import NavBar from '../components/NavBar.vue'
import BookCard from '@components/BookCard.vue';
import router from 'src/router';
const user = ref({})
const searchInput = ref("")
const handleSearch = () => {
  router.push(`/home/search/{${searchInput.value}}`)
  console.log(searchInput.value)
}
const created = async () => {
  const respone = await axios.get('getuser')
  console.log(respone)
  user.value = respone.data
}
//Create endpoint
const categoryEnpoints = ['romance','horror','children','mystery','travel','cookbook','thriller','other']
let endpoints  = []
categoryEnpoints.forEach(category => {
  endpoints.push(`http://localhost:3000/book/categories/${category}`)
})

const data = ref([])
const categories = reactive(
  {
    Romance:[],
    horror: [],
    children: [],
    mystery: [],
    travel: [],
    cookbook: [],
    thriller: [],
    other: []
  }
)
onMounted(async () => {
  console.log(endpoints)
  try {
    const responses = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
    responses.forEach((response, index) => {
      // data.value.push(response.data)
      console.log(response.data)
      
    });
    console.log(reactive)
  } catch (error) {
    console.error(error);
  }
})
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
      <div class="d-flex flex-column gap-3 my-4 shadow px-5 py-5">
        <div class ="text-center">
          <h3>Title Book</h3>
          <div class="d-flex gap-3 overflow-auto w-100 shadow-sm pb-1 w-100" style="max-height:420 ;">
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
  
</style>