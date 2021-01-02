<template>
  <input v-model="name" placeholder="nem queue item">
  <button v-on:click="add">add</button>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'QueueInput',
  data() {
    return {
      name: String
    }
  },
  methods: {
    add() {
      const queueAlias = "alias01"
      const url = `https://localhost:8081?alias=${queueAlias}&name=${this.name}`
      console.log(url)
      // axios.post(url).then(data => {

      // }).catch(err => {

      // })
    }
  }
}
</script>
