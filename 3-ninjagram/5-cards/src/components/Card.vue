<template>
  <article class="card">
    <img :src="post.picture" />
    <header>
      <h1 class="title">{{post.title}}</h1>
      <span class="author">Por: {{post.author}}</span>
    </header>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 900px;
  width: 90%;
  margin: 1.5em auto;
  border: 1px solid #dedede;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  overflow: hidden;
  border-radius: 4px;
}
header {
  background: #ffffff;
  overflow: hidden;
  padding: .5em 1em;
}
img {
  width: 100%;
  max-width: 100%;
  background: #dedede;
  border-bottom: 1px solid #dedede;
}
.title {
  color: #354463;
  font-size: 1.2em;
  font-family: 'Montserrat', sans-serif;
  margin: .2em 0;
}
.author {
  color: #616161;
  font-size: .95em;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
}
</style>
