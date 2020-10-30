<template>
  <div id="app">
    <ul>
      <li  v-for="user of l_users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
name: "Users",
  data: function () {
    return {
      api_url: 'https://jsonplaceholder.typicode.com',
      l_users: []
    }
  },
  mounted: function () {
      axios
          .get(this.api_url+'/users')
          .then(res => this.l_users = res.data)
  }
}
</script>

<style scoped>

</style>