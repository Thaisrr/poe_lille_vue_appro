<template>
  <div id="app">

    <h3>{{ msg }}</h3>
    <p> :D :D :D :D</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {},
  data: function () {
    return {}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
