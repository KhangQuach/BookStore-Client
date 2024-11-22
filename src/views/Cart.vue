<script setup>
import { onMounted, reactive, ref } from 'vue';
import NavBar from '../components/NavBar.vue'
import axios from 'axios';
import { handleStringDate } from '../utils/handleDate.js'
import FooterHome from '@components/FooterHome.vue';
  const borrowList = ref([])
  const listCart = ref()
  const totalPrice = ref(0)
  const count = ref(0)
  const totalSummary = reactive({
    totalBorrows: 0,
    totalPrice: 0,
    totalPending: 0,
    totalSuccess: 0,
    totalDeny: 0,
    totalExpired: 0,
  })
  onMounted(async () => {
    try{
      const userId = localStorage.getItem("id")
      const response = await axios.get(`/borrow/${userId}`)
      if(response){
        borrowList.value = response.data
        console.log(borrowList.value)
      }
      const countBorrows = await axios.get(`/borrow/count/${userId}`)
      totalSummary.totalBorrows = countBorrows.data.borrowedBooks
      totalSummary.totalPending = countBorrows.data.totalPending
      totalSummary.totalSuccess = countBorrows.data.totalSuccess
      totalSummary.totalDeny = countBorrows.data.totalDeny
      totalSummary.totalExpired = countBorrows.data.totalExpired
      console.log(countBorrows)

    }catch(e){
      console.error(e)
    }
  })
  const deleteBorrowedBook = async (borrowItemId) => {
    console.log(borrowItemId)
    try{
      const response = await axios.delete(`/borrow/${borrowItemId}`)
      borrowList.value = borrowList.value.filter(item => item._id !== borrowItemId)
      console.log(borrowList.value)
    }catch(e){
      console.error(e)
    }
  }
  const sortByStatus = () => {
    if(count.value % 2 === 0){
      borrowList.value.sort((a, b) => b.status.localeCompare(a.status))
    }
    else borrowList.value.sort((a, b) => a.status.localeCompare(b.status))
    count.value++
  }
</script>

<template>
  <NavBar/>
  <div class="container-sm " style="margin-top: 90px;">
    <div class="row shadow p-2" style="min-height:800px; max-height: fit-content;">
      <!-- LEFT COLUMN -->
      <div class="col-lg-8 border-end ">
        <div class="d-flex align-items-center justify-content-between mb-1">
          <h4 class="m-2">Your Book Queue</h4>
          <div class="d-flex gap-3">
            <span>{{ totalSummary.totalBorrows }} items</span>
            <button style="" class="px-3 rounded text-black py-1 border" @click="sortByStatus"><i class="bi bi-funnel mr-1"></i>Sort by status</button>
          </div>
        </div>
        <!-- LIST CARD -->
        <div class="d-flex flex-column gap-2 h-100 overflow-auto " style="min-height:700px; max-height: 700px;">
          <!-- CARD -->
          <div class="card w-100 d-flex flex-row justify-content-between p-1 overflow-y-auto" style="min-height: 160px;" v-for="(borrowItem, index) in borrowList" :key="index">
            <div class="d-flex">
              <div class="h-100" style="max-width: 110px; min-width: 110px;">
                <img src="../assets/book1.jpg" alt="" class="img-thumbnail object-fit-cover h-100 w-100" >
              </div>
              <div class="ml-4 mt-2">
                <h4 class="clamped-text">{{borrowItem.bookId.name}}</h4>
                <h5>Author: {{borrowItem.bookId.author}}</h5>
                <div class="d-flex gap-3 ">
                  <span >Price: {{borrowItem.bookId.price}}</span>
                  <span >Type: {{ borrowItem.type }}</span>
                  <span>Part: {{ borrowItem.part }}</span>
                </div>
                <div class="d-flex gap-3">
                  <span>Borrow Date: {{ handleStringDate(borrowItem.borrowDate) }}</span>
                  <span>Return Date: {{ handleStringDate(borrowItem.returnDate) }}</span>
                </div>
              </div>
            </div>
            <div class="m-3 d-flex gap-2 text-white">
              <button  @click="deleteBorrowedBook(borrowItem._id)" type="button" class="btn btn-danger " style="height: 40px;width: 110px;"><i class="bi bi-trash3 mr-1 "></i>Delete</button>
              <button v-if="borrowItem.status === 'pending'" type="button" class="btn btn-secondary" style="height: 40px; width: 110px;" ><i class="bi bi-hourglass-split mr-1"></i>Pending</button>
              <button v-if="borrowItem.status === 'success'" type="button" class="btn btn-success " style="height: 40px; width: 110px;" ><i class="bi bi-check-circle mr-1"></i>Success</button>
              <button v-if="borrowItem.status === 'expired'" type="button" class="btn btn-warning text-black" style="height: 40px; width: 110px;" ><i class="bi bi bi-calendar-x mr-1"></i>Expired</button>
              <button v-if="borrowItem.status === 'deny'" type="button" class="btn btn-info text-black" style="height: 40px; width: 110px;" ><i class="bi bi-x-circle mr-1"></i>Deny</button>

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
        <div class="shadow-sm p-4 bg-white mt-4 ml-2">
          <div class="d-flex justify-content-between">
            <h6>Total Books: </h6>
            <h6>{{totalSummary.totalBorrows}}</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Total Price: </h6>
            <h6>{{totalSummary.totalPrice}} $</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Pending: </h6>
            <h6>{{totalSummary.totalPending }}</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Success: </h6>
            <h6>{{totalSummary.totalSuccess}}</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Deny: </h6>
            <h6>{{ totalSummary.totalDeny }}</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Expired: </h6>
            <h6>{{totalSummary.totalExpired}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterHome/>
</template>

<style scoped>
.clamped-text {
    display: -webkit-box;
    -webkit-line-clamp: 1; /* Số dòng giới hạn */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>