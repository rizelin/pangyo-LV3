<template>
  <div>
    Ask
    <div v-for="ask in asks" :key="ask.id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '@/api/index.js';

export default {
  data() {
    return {
      asks: [],
    }
  },
  created() {
    fetchAskList()
    .then((response) => {
      this.asks = response.data;
      console.log(vm.asks);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>

<style>

</style>