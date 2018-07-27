<template>
  <div id="all-friends">
    <h2>All Friends</h2>
    <ul v-for="(friend, index) in friends" :key="index">
      <li @click="unFriend(friend.name)">{{ friend.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllFriends',
  props: ['friends'],
  data () {
    return {
    }
  },
  methods: {
    unFriend(name) {
      this.$emit('delete', { name });
    }
  }
}
</script>

<style>
</style>
