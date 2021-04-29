export const state = () => ({
  countryDetail: [],
  Region: "Filter By Region"
});

export const mutations = {
  getData(state, payload) {
    state.countryDetail = payload;
    state.countryClone = payload;
  },
  filterRegion(state, payload) {
    state.countryDetail = state.countryClone.filter(e => {
      if (e.region === state.Region) {
        return e;
      }
    });
    console.log("hey");
  }
};

export const actions = {
  async getCountries({ commit }) {
    const res = await this.$axios.get("all");
    console.log(res);
    commit("getData", res.data);
  }
};
