<template>
  <div>
    Job
    <div v-for="job in jobs" :key="job.id">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '@/api/index.js';


export default {
  data() {
    return {
      jobs: [],
    }
  },
  created() {
    var vm = this;
    fetchJobsList()
    .then((response) => {
      vm.jobs = response.data;
      console.log(vm.jobs);
    })
    .catch((error) => {
      console.log(error);
    }) 
  }
}
</script>

<style>

</style>