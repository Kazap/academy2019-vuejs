<template>
  <div class="new-post">
    <Header>
      <router-link class="back-button" slot="action-left" tag="button" to="/">
        <img class="icon-back" :src="require('../assets/back.png')">
      </router-link>
    </Header>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'new-post',
  components: {
    Header
  }
}
</script>

<style scoped>
  .icon-back {
    width:25px;
    height: 25px;
  }
  .back-button {
    background: none;
    border: none;
    cursor: pointer;
  }
</style>
