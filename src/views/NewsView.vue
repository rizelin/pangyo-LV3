<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNuewList } from '@/api/index.js';

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    var vm = this;
    fetchNuewList()
    .then((response) => {
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