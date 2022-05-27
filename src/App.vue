<template>
  <v-app>

    <nav class="d-flex ">
      <router-link to="/" active-class="active" exact="">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/computed">Computed</router-link>
    </nav>
    <nav class="d-flex ">
      <router-link to="/blog/33">Blog</router-link>

    </nav>



    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
<style lang="scss">
 nav {
  a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
  }
  .router-link-exact-active {
    background-color: red;
  }
 }
</style>
