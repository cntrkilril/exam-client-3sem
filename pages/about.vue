<template>
  <main class="main">
    <h2 class="main__h2">О нас</h2>
    <loading v-if="load === true"/>
    <p class="block-content__text" v-if="load === false" v-html='`${content.text}`'></p>
  </main>
</template>

<script>
import Loading from "../components/loading";
export default {
  name: "index",
  components: {Loading},
  data() {
    return {
      content: {},
      load: true
    }
  },
  beforeMount() {
    this.getContent()
  },
  methods: {
    async getContent() {
      await fetch(`https://demo-api.vsdev.space/api/delivery/about_page`, {
        method: 'GET',
      }).then((res) => {
        return res.json()
      }).then((result) =>
        this.content = result)
      console.log(this.content)
      this.load = false
    }
  }
}
</script>

<style scoped>
    .main {
      padding: 1rem;
    }
    .block-content__text {
      text-align: justify;
    }
</style>
