<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    var vm = this;
    axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then((response) => {
      // console.log(response.data);
      vm.users = response.data;
      console.log(vm.users);
    })
    .catch((error) => {
      console.log(error);
    }) 
  }
}
</script>

<style>

</style>