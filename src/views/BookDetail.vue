<script setup>
  import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
  const route = useRoute()
  const data = ref({})
  onMounted( async ()=>{
    const _id = route.params.id
    try{
      const result = await axios.get(`/book/${_id}`)
      console.log(result.data)
    }
    catch(e){
      console.error(e)
    }
  })
</script>

<template>
  <NavBar/>
  <div class="container-sm ">
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
        <form class="m-5 d-flex flex-column gap-2">
          <h1>Product name</h1>
          <div class="d-flex align-items-center gap-5">
            <h2>99$</h2>
            <h3>4.5/5 Star</h3>
          </div>
          <h5>Author: {{}}</h5>
          <div class="my-5">
            <div class="input-group mb-3">
              <select class="form-select" id="inputGroupSelect02">
                <option selected>Choose your type</option>
                <option value="hardcover">Hard Cover</option>
                <option value="ebook">Ebook</option>
                <option value="audiobook">Audio Book</option>
              </select>
              <label class="input-group-text" for="inputGroupSelect02">Type</label>
            </div>
            <div class="input-group mb-3">
              <select class="form-select" id="inputGroupSelect02">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label class="input-group-text" for="inputGroupSelect02">Part</label>
            </div>
            <button class="btn btn-primary w-100">Add to cart</button>
          </div>
          <div class="d-flex gap-2 text-center">
            <div class="card w-25">
              <div class="card-body">
                <h6 class="card-subtitle text-body-secondary">Publish Date</h6>
                <p class="card-text">May 28, 2002</p>
              </div>
            </div>
            <div class="card w-25">
              <div class="card-body">
                <h6 class="card-subtitle text-body-secondary">Publisher</h6>
                <p class="card-text">Bantam Books</p>
              </div>
            </div>
            <div class="card w-25">
              <div class="card-body">
                <h6 class="card-subtitle text-body-secondary">Language</h6>
                <p class="card-text">English</p>
              </div>
            </div>
            <div class="card w-25">
              <div class="card-body">
                <h6 class="card-subtitle text-body-secondary">Pages</h6>
                <p class="card-text">704</p>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <h5>Detailed Description</h5>
            <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing eli
              t. Eos dolore rerum itaque facere quod alias ullam eaque beatae 
              ipsam debitis! Soluta magnam nisi iusto nemo illum dolore eaque natus eum?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto optio
               dolores accusantium illo, omnis pariatur eligendi dolorum non dolore, eos
                tenetur, amet ab iste ducimus aperiam ullam quaerat repellendus.
                tenetur, amet ab iste ducimus aperiam ullam quaerat repellendus.
                tenetur, amet ab iste ducimus aperiam ullam quaerat repellendus.
                
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>