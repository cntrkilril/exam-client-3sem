<template>
  <main class="main">
    <h2 class="main__h2">Главная</h2>
    <loading v-if="load === true"/>
    <div class="main__block-content block-content" v-if="load === false">
      <p class="block-content__text" v-html='`${content.text}`'></p>
      <img class="block-content__image" :src='`${content.image}`' alt="фото фуры">
    </div>
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
      await fetch(`https://demo-api.vsdev.space/api/delivery/home_page`, {
        method: 'GET',
      }).then((res) => {
        return res.json()
      }).then((result) =>
        this.content = result)
      this.load = false
    }
  }
}
</script>

<style scoped>
    .main {
      padding: 1rem;
    }
    .block-content
    {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .block-content__text {
      text-align: justify;
    }
    .block-content__image {
      width: 100%;
    }
</style>
