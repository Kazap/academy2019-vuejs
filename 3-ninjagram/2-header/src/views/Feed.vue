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
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'feed',
  components: {
    Header
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
</style>
