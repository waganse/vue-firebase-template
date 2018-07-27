<template>
  <div id="app">
    <Blogs />
    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
import Blogs from './Blogs'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'

export default {
  name: 'app',
  components: {
    Blogs,
    AllFriends,
    OnlineFriends
  },
  data () {
    return {
      friends: [
        { name: 'Taiga', online: true },
        { name: 'Kento', online: true },
        { name: 'Yuko', online: false },
        { name: 'Yosuke', online: true }
      ]
    }
  },
  methods: {
    deleteFriend(payload) {
      console.log(payload);
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    }
  }
}
</script>

<style>
</style>
