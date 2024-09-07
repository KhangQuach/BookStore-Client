<script setup>
import router from "src/router";
import { defineProps, onMounted, ref} from "vue";
import { toast } from 'vue3-toastify';
  const id = "id"
  const props = defineProps(['book']);
  // console.log(props.book)
  const addToCard = () => {
      console.log("added to card")
      toast.success('Added to card',{
          "position": "bottom-right"
        });
  }
  const gotoDetail = () => {
    router.push(`/home/detail/${props.book._id}`)
    console.log("Go to detail")
  }
</script>
<template>
  <div class="card" style="min-width: 238px; cursor: pointer;" @click="gotoDetail">
  <img src="../assets/book1.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ props.book.bookName }}</h5>
    <button href="#" class="btn btn-primary" @click.stop="addToCard">Add to cart</button>
  </div>
</div>
</template>