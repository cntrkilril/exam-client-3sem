<template>
  <article class="article">
    <nav class="nav-block">
      <b-card bg-variant="secondary" text-variant="white" header="Навигация">
        <NuxtLink exact active-class="text-white" class="nav-link mb-2" to="/"><b-card-text>Главная</b-card-text></NuxtLink>
        <NuxtLink active-class="text-white" class="nav-link mb-2" to="/about"><b-card-text>О нас</b-card-text></NuxtLink>
        <NuxtLink active-class="text-white" class="nav-link" to="/sales"><b-card-text>Доставки</b-card-text></NuxtLink>
      </b-card>
    </nav>
    <div class="article__widget-block widget-block">
      <b-card bg-variant="light" header="Количество отправлений" v-if="load === false">
        <loading v-if="load === true"/>
        <b-card-text><b>Фурой:</b> {{getWidget.trucks}}</b-card-text>
        <b-card-text><b>Поездом:</b> {{getWidget.trains}}</b-card-text>
        <b-card-text><b>Кораблем:</b> {{getWidget.planes}}</b-card-text>
        <b-card-text><b>Самолетом:</b> {{getWidget.ships}}</b-card-text>
      </b-card>
    </div>
  </article>
</template>

<script>
import Loading from "./loading";
export default {
  name: "ArticleBlock",
  components: {Loading},
  data() {
    return {
      widget: {
      },
      load: true
    }
  },
  async mounted() {
      this.getWidget
  },
  computed: {
    getWidget() {
      this.widget = this.$store.getters.getWidget
      this.load = false
      return this.widget
    }
  },
}
</script>

<style scoped>
  .article {
    display: flex;
    flex-direction: column;
    background-color: #464646;
    padding: 1rem;
    height: 100vh;
    min-height: 100%;
  }
  .nav-block
  {
    margin-bottom: 1rem;
    color: #7a7a7a;
  }
  .nav-link {
    color: #d5d5d5;
    padding: 0;
  }
  .card-header {
    text-align: center;
  }
</style>
