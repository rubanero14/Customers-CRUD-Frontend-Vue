import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLoading: false,
    };
  },
  mutations: {
    isLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    isLoading(context, payload) {
      context.commit("isLoading", payload);
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
});

export default store;
