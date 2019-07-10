<template>
  <div class="new-post">
    <Header>
      <router-link class="back-button" slot="action-left" tag="button" to="/">
        <img class="icon-back" :src="require('../assets/back.png')">
      </router-link>
    </Header>
    <form class="form" @submit.prevent="newPost">
      <FormControl label="Autor">
        <input v-model="post.author" required type="text" />
      </FormControl>

      <FormControl label="Título">
        <input v-model="post.title" required type="text">
      </FormControl>

      <FormControl label="URL da imagem">
        <input v-model="post.picture" required type="url">
      </FormControl>
      <Button>Publicar</Button>
    </form>
  </div>
</template>

<script>
import API from '@/api'
import Header from '@/components/Header'
import Button from '@/components/form/Button'
import FormControl from '@/components/form/FormControl'
export default {
  name: 'new-post',
  components: {
    Header,
    Button,
    FormControl
  },
  data () {
    return {
      post: {
        author: '',
        title: '',
        picture: ''
      }
    }
  },
  methods: {
    newPost (...args) {
      const { author, title, picture } = this.post
      API.posts.create({ author, title, picture }).then(response => {
        this.$router.push({ path: '/' })
      })
    }
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
  .form {
    max-width: 900px;
    width: 90%;
    margin: 1em auto;
  }
</style>
