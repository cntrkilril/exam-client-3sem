<template>
  <main class="main">
    <h2 class="main__h2 mb-2">Доставки</h2>
    <loading v-if="sales.length === 0"/>
    <form-block v-if="sales.length !== 0" @Submit="onSubmit"/>
    <b-card v-bind:class="{'bg-warning text-white': sale.type === 'train', 'bg-primary text-white': sale.type === 'ship', 'bg-info text-white': sale.type === 'plane', 'bg-dark text-white': sale.type === 'truck'}"
            class="mb-2" :title="`Отправление №${sale.id}`" v-for="sale in sales">
      <b-card-text><b>Откуда: </b>{{sale.departure_city}}, {{sale.departure_address}}</b-card-text>
      <b-card-text><b>Куда: </b>{{sale.destination_city}}, {{sale.destination_address}}</b-card-text>
      <b-card-text><b>Вес: </b>{{sale.weight}}</b-card-text>
      <b-card-text><b>Объем: </b>{{sale.volume}}</b-card-text>
      <b-card-text><b>Тип: </b>{{sale.type}}</b-card-text>
    </b-card>
    <p class="block-content__text">{{allSales.id}}</p>
  </main>
</template>

<script>
import Loading from "../components/loading";
import FormBlock from "../components/formBlock";
export default {
  name: "sales",
  components: {FormBlock, Loading},
  data() {
    return {
      sales: {
        type: Array,
        default: []
      }
    }
  },
  mounted() {
    this.allSales
  },
  computed: {
    allSales() {
      this.sales = this.$store.getters.allSales
      return this.sales
    }
  },
  methods: {
    onSubmit() {
      this.sales = this.$store.getters.allSales
    }
  }
}
</script>

<style scoped>
  .main {
    padding: 1rem;
  }
  .main__h2{
    margin-bottom: 2rem;
  }
  .block-content__text {
    text-align: justify;
  }
</style>
