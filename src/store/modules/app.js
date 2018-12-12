const app = {
  state: {
    states_404: 404, //记录请求状态码
    loadingShow: false //请求loading状态
  },
  getters: {
    getState: state => {
      return state.states_404
    },
    loadingSh: state => {
      return state.loadingShow
    }
  },
  mutations: {
    editState(state, code) {
      code += "";
      code = code.includes('200') ? 404 : code;
      state.states_404 = code;
    },
    loading: (state, code) => {
      state.loadingShow = code;
    }
  },
  actions: {
    showLoading({
      commit
    }, code) {
      commit('loading', true);
    },
    hideLoading({
      commit
    }) {
      commit('loading', false);
    }
  }
}

export default app;
