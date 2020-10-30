<template>
<div id="app">
  <h3>{{ user.name }}</h3>
  <p>{{ user.email }}</p>

  <router-link :to="{name: 'add', params: { id : user.id}}">Modifier</router-link>
</div>
</template>

<script>
import axios from 'axios'
import {User} from "@/classes/User";

export default {
name: "UserDetails",
  data: function () {
    return {
      user: new User(),
    }
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get('https://jsonplaceholder.typicode.com/users' + '/' + id)
    .then(res => this.user = res.data )
  }
}
</script>

<style scoped>

</style>