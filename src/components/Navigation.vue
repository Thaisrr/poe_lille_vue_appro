<template>
  <div id="app">
    <div class="nav">
      <div class="main-width">
        <h3> {{title}} </h3>
        <ul class="list-link">
          <li>Lien</li>
          <li>Lien</li>
          <li>Lien</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    title: String
  }
}
</script>

<style scoped>
  .nav {
    width: 100%;
    height: 60px;
    box-shadow: 0 0 4px #2c3e50;

  }

  .main-width {
    display: flex;
    justify-content: space-between;
  }

  ul {
    width: 70%;
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }

  ul li {
    color: #42b883;
  }

</style>