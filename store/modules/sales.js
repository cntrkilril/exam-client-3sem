import sales from "../../pages/sales";

export default {
  actions: {
    async fetchSales(ctx) {
      const res = await fetch('https://demo-api.vsdev.space/api/delivery/sales', {
        method: 'GET',
      })
      const sales = await res.json()
      ctx.commit('updateSales', sales)
    },
    async addSales(ctx, params) {
      var body = new FormData()
      body.append('type', params.type)
      body.append('departure_city', params.departure_city)
      body.append('departure_address', params.departure_address)
      body.append('destination_city', params.destination_city)
      body.append('destination_address', params.destination_address)
      body.append('weight', params.weight)
      body.append('volume', params.volume)
      const res_post = await fetch('https://demo-api.vsdev.space/api/delivery/sales', {
        method: 'POST',
        body: body
      })
      const res = await fetch('https://demo-api.vsdev.space/api/delivery/sales', {
        method: 'GET',
      })
      const sales = await res.json()
      console.log(sales)
      ctx.commit('updateSales', sales)
      }
    },
  mutations: {
    updateSales(state, sales) {
      state.sales = sales
    }
  },
  state: {
    sales: []
  },
  getters: {
    allSales(state) {
      return state.sales;
    },
  }
}
