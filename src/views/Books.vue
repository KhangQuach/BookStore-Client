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
     
      <Row v-for="(categories,index) in categoryEndpoints" :key="index" :category="categories"/>
    </div>
  </div>
  <FooterHome/>
</template>

<style scoped>
  
</style>