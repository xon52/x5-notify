const store = {
  namespaced: true,
  state: {
    notices: [],
    max: 5
  },
  getters: {
    notices: state => state.notices,
    max: state => state.max
  },
  mutations: {
    ADD: (state, payload) => state.notices.push(payload),
    REMOVE: (state, payload) => (state.notices = state.notices.filter(e => e.key !== payload)),
    MAX: (state, payload) => (state.max = payload)
  },
  actions: {
    add: ({ commit }, payload) => commit('ADD', payload),
    remove: ({ commit }, payload) => commit('REMOVE', payload),
    max: ({ commit }, payload) => commit('MAX', payload)
  }
}

export default store
