<template>
  <div class="home">
    <Header>
      <router-link slot="action-left" class="icon-button" tag="button" to="/login">
        <img class="icon" :src="require('../assets/account.png')">
      </router-link>
      <router-link slot="action-right" class="icon-button" tag="button" to="/post/novo">
        <img class="icon" :src="require('../assets/new.png')">
      </router-link>
    </Header>
    <div v-if="posts.length">
      <Card v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div v-else class="empty">
      Ainda não temos posts cadastrados. :(
    </div>
  </div>
</template>

<script>
import API from '@/api'
import Header from '@/components/Header'
import Card from '@/components/Card'
export default {
  name: 'feed',
  data () {
    return {
      posts: []
    }
  },
  components: {
    Header,
    Card
  },
  mounted () {
    API.posts.show().then(response => {
      if (response && response.data) {
        this.posts = response.data
      }
    })
  }
}
</script>

<style scoped>
  .icon {
    width: 30px;
    height: 30px;
  }
  .icon-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  .empty {
    font-family: 'Montserrat', sans-serif;
    padding: 1em;
    text-align: center;
    margin-top: 5em;
    font-size: 1.5em;
  }
</style>
