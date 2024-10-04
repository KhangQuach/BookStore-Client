<script setup>
import router from "src/router"

  const gotoDetail = () => {
    router.push(`/home/detail/${props.book._id}`)
    console.log("Go to detail")
  }
  const props = defineProps(['book'])
  console.log(props.book)
</script>

<template>
  <div class="card" style="width: 48%; min-height: 150px; cursor: pointer;" @click="gotoDetail">
    <div class="row g-0">
      <div class="col-md-3 ">
        <img src="../assets/book2.jpg" class="img-fluid " alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body ml-5">
          <h3 class="card-title">{{props.book.name }}</h3>
          <h5>By: {{props.book.author}}</h5>
          <h5 class="mb-5">Rate: {{ props.book.rate }}</h5>
          <p class="m-0">Language: {{ props.book.language }}</p>
          <p class="m-0">Category: {{ props.book.category.toUpperCase() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>