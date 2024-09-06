<script setup>
import BookCard from '@components/BookCard.vue';
import axios from 'axios';
import { defineProps, onMounted, ref} from "vue";

const props = defineProps(['category']);

console.log(props.category);
const books = ref({})
onMounted(async () => {
  try{
    const { data } = await axios.get(`book/categories/${props.category}`)
    books.value = data
    console.log(books.value)
  }
  catch(error){
    console.error(error);
  }
})
</script>
<template>
  <div class="d-flex flex-column gap-3 my-4 shadow px-5 py-5">
        <div class ="text-center">
          <h3>{{props.category.toUpperCase()}}</h3>
          <div class="d-flex gap-3 overflow-auto w-100 shadow-sm pb-1 w-100" style="max-height:420 ;">
            <BookCard v-for="(book ,index) in books" :key="index" :book="book"/>
          </div>
        </div>
      </div>
</template>