<script setup>
import { handleStringDate } from '@utils/handleDate';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
  const route = useRoute()
  const data = ref({})

  onMounted( async ()=>{
    const _id = route.params.id
    try{
      const result = await axios.get(`/book/${_id}`)
      data.value = result.data.data
      console.log(data.value)
    }
    catch(e){
      console.error(e)
    }
  })
  const handleSubmit = () =>{
    const userId = localStorage.getItem("id")
    const bookId = route.params.id
    console.log(userId, bookId)
  }
</script>

<template>
  <NavBar/>
  <div class="container-sm" style="margin-top: 70px;">
    <nav class="my-3" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
    <div class="row shadow p-3 rounded-2" style="height: fit-content;">
      <div class="col-5 ">
        <img class="img-fluid" src="../assets/book2.jpg" alt="">
      </div>
      <div class="col rounded-2">
        <form class="m-5 d-flex flex-column gap-2" @submit.prevent="handleSubmit">
          <h1>{{ data?.name }}</h1>
          <div class="d-flex align-items-center gap-5">
            <h2>{{data?.price}}$</h2>
            <h3>{{data?.rate}}</h3>
          </div>
          <h5>Author: {{data?.author}}</h5>
          <div class="my-5">
            <div class="input-group mb-3">
              <select class="form-select" id="inputGroupSelect02">
                <option v-for="(type, index) in data?.typeBook" :key="index" value="1">{{ type }}</option>
              </select>
              <label class="input-group-text" for="inputGroupSelect02">Type</label>
            </div>
            <div class="input-group mb-3">
              <select class="form-select" id="inputGroupSelect02">
                <option v-for="(part, index) in data?.part" :key="index" value="1">{{ part }}</option>
              </select>
              <label class="input-group-text" for="inputGroupSelect02">Part</label>
            </div>
            <button class="btn btn-primary w-100">Add to cart</button>
          </div>
          <div class="d-flex gap-2 text-center">
            <div class="card w-25">
              <div class="card-body">
                <h6 class="card-subtitle text-body-secondary">Publish Date</h6>
                <p class="card-text ">{{handleStringDate(data?.publishDate)}}</p>
              </div>
            </div>
            <div class="card w-25">
              <div class="card-body">
                <h6 class="card-subtitle text-body-secondary">Publisher</h6>
                <p class="card-text">{{data?.publisher}}</p>
              </div>
            </div>
            <div class="card w-25">
              <div class="card-body">
                <h6 class="card-subtitle text-body-secondary">Language</h6>
                <p class="card-text">{{ data?.language }}</p>
              </div>
            </div>
            <div class="card w-25">
              <div class="card-body">
                <h6 class="card-subtitle text-body-secondary">Pages</h6>
                <p class="card-text">{{data?.pageNumber}}</p>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <h5>Detailed Description</h5>
            <p class="">{{data.description }}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>