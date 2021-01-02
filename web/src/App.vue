<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <QueueInput/>
  <QueueItemList/>
</template>

<script>
import QueueInput from './components/QueueInput.vue'
import QueueItemList from './components/QueueItemList.vue'

export default {
  name: 'App',
  components: {
    QueueInput,
    QueueItemList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
