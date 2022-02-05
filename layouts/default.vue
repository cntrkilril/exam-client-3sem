<template>
  <div class="body">
    <Header/>
    <div class="article-main-block">
      <ArticleBlock/>
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import ArticleBlock from "../components/articleBlock";
export default {
  name: "default",
  components: {Header, ArticleBlock,},
  async beforeMount() {
    this.$store.dispatch('fetchWidget')
    this.$store.dispatch('fetchSales')
  },
}
</script>

<style>
  .article-main-block {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
</style>
