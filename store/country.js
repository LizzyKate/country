export const state = () => ({
  countryDetail: [],
  countryClone: [],
  Region: "Filter By Region"
});

export const mutations = {
  getData(state, payload) {
    state.countryDetail = payload;
    state.countryClone = payload;
  },
  filterRegion(state, payload) {
    state.countryDetail = state.countryClone.filter(e => {
      if (e.region === payload) {
        return e;
      }
    });
  },
  filterByName(state, payload) {
    if (payload === "") {
      state.countryDetail = state.countryClone;
    } else {
      state.countryDetail = state.countryClone.filter(e => {
        return e.name.toLowerCase().includes(payload.toLowerCase());
      });
    }
  }
};

export const actions = {
  async getCountries({ commit }) {
    const res = await this.$axios.get("all");

    commit("getData", res.data);
  }
};
