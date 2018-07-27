<template>
  <nav class="main-nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><route-link to="{ name: 'About' }">About</route-link></li>
    </ul>
    <h2>User Profiles</h2>
    <ul>
      <li v-for="(id, index) in userIds" :key="index">
        <router-link :to="{ name: 'ViewProfile', params: { user_id: id } }">
          <span>Profile {{ id }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data ()
   {
    return {
      userIds: [
        '1', '2', '3', '4'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
