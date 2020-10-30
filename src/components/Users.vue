<template>
  <div id="app">
    <h3>Mes Utilisateurs :</h3>
    <p v-show="message" @click="message = undefined">{{ message }}</p>
    <ul>
      <li  v-for="user of l_users" :key="user.id">{{ user.name }}
        <button @click="deleteUser(user.id)">Delete</button>
        <router-link :to="{name: 'user-detail', params: { id: user.id} }">Voir</router-link>
      </li>
    </ul>

    <h3>Ajouter un utilisateur : </h3>
    <UserForm></UserForm>

  </div>
</template>

<script>
import axios from 'axios'
import UserForm from "@/components/UserForm";

export default {
name: "Users",
  components: {UserForm},
  data: function () {
    return {
      api_url: 'https://jsonplaceholder.typicode.com/users',
      l_users: [],
      message: undefined
    }
  },
  mounted: function () {
      axios
          .get(this.api_url)
          .then(res => this.l_users = res.data)
  },
  methods: {
      deleteUser: function (id) {
        axios
          .delete(this.api_url + '/' + id)
          .then( ()  => this.message = 'Utilisateur supprimé')
      }
  }
}
</script>

<style scoped>

</style>