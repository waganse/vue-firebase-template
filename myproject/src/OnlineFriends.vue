<template>
  <div id="all-friends">
    <h2>Online Frinds</h2>
    <ul v-for="(friend, index) in friends" :key="index">
      <li v-if="friend.online">{{ friend.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OnlineFriends',
  props: ['friends'],
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
