<script setup>
  import { ref } from 'vue';
import NavBar from '../components/NavBar.vue'
  const listCart = ref()
  const totalPrice = ref(0)
</script>

<template>
  <NavBar/>
  <div class="container-sm " style="margin-top: 90px;">
    <div class="row shadow p-2" style="min-height:800px; max-height: fit-content;">
      <!-- LEFT COLUMN -->
      <div class="col-lg-8 border-end ">
        <div class="d-flex align-items-center justify-content-between mb-1">
          <h4 class="m-2">Shopping Cart</h4>
          <span>4 items</span>
        </div>
        <!-- LIST CARD -->
        <div class="d-flex flex-column gap-2 h-100 overflow-auto " style="min-height:700px; max-height: 700px;">
          <!-- CARD -->
          <div class="card w-100 d-flex flex-row justify-content-between p-1" style="height: 140px;">
            <div class="d-flex">
              <div class="h-100" style="max-width: 110px; min-width: 110px;">
                <img src="../assets/book1.jpg" alt="" class="img-thumbnail object-fit-cover h-100 w-100" >
              </div>
              <div class="ml-4 mt-2">
                <h4>Product Name</h4>
                <h5>author</h5>
                <span>Price: 5$</span>
              </div>
            </div>
            <div class="m-3 d-flex gap-2 text-white">
              <button type="button" class="btn btn-danger" style="height: 40px;"><i class="bi bi-trash3"></i></button>
              <button type="button" class="btn btn-secondary" style="height: 40px;" ><i class="bi bi-hourglass-split"></i> Pending...</button>
            </div>
          </div>
        </div>
        <div class="my-3">
          <router-link to="/home" class="text-warning-emphasis text-decoration-none fs-6 py-3"> <i class="bi bi-arrow-left fs-6"></i>  Go to home</router-link>
        </div>
      </div>
      <!-- RIGHT COLUMN -->
      <div class=" col-lg-4 border-start">
        <div class="mt-2 ml-3">
          <h4 class="">Summary</h4>
        </div>
        <div class="shadow p-4 bg-white mt-4 ml-2">
          <div class="d-flex justify-content-between">
            <h6>Total Books: </h6>
            <h6>5</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Total Price: </h6>
            <h6>200$</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Pending: </h6>
            <h6>5</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Success: </h6>
            <h6>5</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>