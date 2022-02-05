export default {
  actions: {
    async fetchWidget(ctx) {
      const res = await fetch('https://demo-api.vsdev.space/api/delivery/left_widget', {
        method: 'GET',
      })
      const widget = await res.json()
      ctx.commit('updateWidget', widget)
    },
  },
  mutations: {
    updateWidget(state, widget) {
      state.widget = widget
    }
  },
  state: {
    widget: []
  },
  getters: {
    getWidget(state) {
      return state.widget;
    },
  }
}
