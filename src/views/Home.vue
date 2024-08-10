<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
const user = ref({})
const created = async () => {
  const respone = await axios.get('user')
  console.log(respone)
  user.value = respone.data
}
</script>
<template>
  homePage
</template>