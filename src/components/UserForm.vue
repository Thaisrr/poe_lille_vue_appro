<template>
  <div id="app">
    <p>
      <label>Nom</label>
      <input v-model="user.name">
    </p>
    <p>
      <label>Username</label>
      <input v-model="user.username">
    </p>
    <p>
      <label>Email</label>
      <input type="email" v-model="user.email">
    </p>
    <button @click="createUser()">Envoyer</button>
  </div>
</template>

<script>
import axios from 'axios'
import {User} from "@/classes/User";

export default {
name: "UserForm",
  data: function () {
    return {
      user: new User(),
      param: this.$route.params.id
    }
  },
  mounted() {
      this.setUser();
  },
  methods: {
    createUser: function () {
      if(this.user.name && this.user.email && this.user.username) {
        if(this.param) {
          axios.put('https://jsonplaceholder.typicode.com/users/' + this.param, this.user)
              .then( res => console.log(res))
        } else {
          axios.post('https://jsonplaceholder.typicode.com/users', this.user)
              .then( res => console.log(res))
        }
      } else {
        // TODO : faire une vrai gestion d'erreurs !
        console.log('Veuillez renseigner tous les champs !')
      }
    },
    setUser: function () {
      if (this.param) {
        axios
          .get('https://jsonplaceholder.typicode.com/users' + '/' + this.param)
          .then(res => this.user = res.data)
      }
  },
  }
}
</script>

<style scoped>

</style>