<script setup>
import { handleStringDate } from '@utils/handleDate';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { toast } from 'vue3-toastify';

  const route = useRoute()
  const data = ref({})
  const dataCreateBorrow = ref({
    userId: localStorage.getItem("id"),
    bookId: route.params.id,
    part:'',
    type:'',
    returnDate: '',
    username:'',
    bookname:''
  })
  onMounted( async ()=>{
    const _id = route.params.id
    try{
      const result = await axios.get(`/book/${_id}`)
      const user = await axios.get(`/user/${localStorage.getItem("id")}`)
      console.log(result)
      dataCreateBorrow.value.username = user.data.username
      dataCreateBorrow.value.bookname = result.data.data.name
      data.value = result.data.data
      console.log(data.value)
    }
    catch(e){
      console.error(e)
    }
  })
  const handleSubmit = async () => {
  try {
    const response = await axios.post('/borrow/', dataCreateBorrow.value);
    console.log('Response from server:', response);
    if (response.data.success) {
      toast.success('Added to cart, please wait for approval!',{
          "position": "bottom-right"
      });
      dataCreateBorrow.value = {
        userId: localStorage.getItem("id"),
        bookId: route.params.id,
        part: '',
        type: '',
        returnDate: ''
      };
    } else {
      console.error('Borrow failed:', response.data.message);
      toast.error('Borrow failed!',{
          "position": "bottom-right"
      });
    }
  } catch (e) {
    console.error('Error:', e);
    alert('An error occurred while borrowing the book. Please try again later.');
  }
};
</script>

<template>
  <NavBar/>
  <div class="container-sm" style="margin-top: 70px;">
    <nav class="my-3" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/home">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Detail</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{ data?.name }}</li>
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
              <select class="form-select" id="inputGroupSelect02" v-model="dataCreateBorrow.type" required>
                <option v-for="(type, index) in data?.typeBook" :key="index" :value="type" >{{ type }}</option>
              </select>
              <label class="input-group-text" for="inputGroupSelect02">Type</label>
            </div>
            <div class="input-group mb-3">
              <select class="form-select" id="inputGroupSelect02" v-model="dataCreateBorrow.part" required>
                <option v-for="(part, index) in data?.part" :key="index" :value="part">{{ part }}</option>
              </select>
              <label class="input-group-text" for="inputGroupSelect02">Part</label>
            </div>
            <div class="input-group mb-3">
              <input type="date" class="form-control" id="dateInput" placeholder="Select a date" required v-model="dataCreateBorrow.returnDate">
            </div>
            <button class="btn btn-warning w-100">Add to cart</button>
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