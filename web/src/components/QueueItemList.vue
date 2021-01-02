<template>
  <ul v-if="items && items.length">
    <div v-for="item in items" v-bind:key="item.id">
      <p><strong>{{item.title}}</strong></p>
      <p>{{item.body}}</p>
    </div>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  name: 'QueueItemList',
  data() {
    return {
      items: []
    }
  },
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`).then(response => {
      this.items = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
