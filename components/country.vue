<template>
  <section class="px-16 py-10">
    <nav class="justify-between items-center flex">
      <div>
        <input
          type="text"
          class="bg-white shadow px-4 py-2 text-blue-100 font-poppins text-sm focus:outline-none rounded"
          placeholder="Search for a country"
          v-model="countryName"
          @change="filterName"
        />
      </div>
      <div>
        <select
          type="text"
          id="country"
          style="width:300px"
          class="bg-white shadow px-4  py-2 text-blue-100 font-poppins text-sm focus:outline-none rounded"
          v-model="region"
          @change="filterRegion"
        >
          <option selected disabled>Filter By Region</option>

          <option v-for="(name, i) in regions" :key="i" @click="region = name">
            {{ name }}
          </option>
        </select>
      </div>
    </nav>
    <section class="mt-16 grid grid-cols-4 gap-4">
      <div
        class="bg-white mt-16 shadow-lg rounded-md flex flex-col"
        v-for="(name, i) in country"
        :key="i"
      >
        <div>
          <img :src="name.flag" alt="" />
        </div>
        <div class="p-4 mt-4">
          <h2 class="font-poppins text-blue-100  text-lg">{{ name.name }}</h2>
          <p class="mt-6 text-sm text-blue-100 font-poppins">
            Population:
            <span class="font-inter ml-2 text-faint">{{
              name.population
            }}</span>
          </p>
          <p class="mt-3 text-sm text-blue-100 font-poppins">
            Region:
            <span class="font-inter ml-2 text-faint">{{ name.region }}</span>
          </p>
          <p class="mt-3 text-sm text-blue-100 font-poppins">
            Capital:
            <span class="font-inter ml-2 text-faint">{{ name.capital }}</span>
          </p>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      region: "Filter By Region",
      regions: [],
      countryName: ""
    };
  },
  computed: {
    country() {
      return this.$store.state.country.countryDetail;
    }
  },
  async mounted() {
    await this.$store.dispatch("country/getCountries");
    this.country.forEach(e => {
      this.regions.push(e.region);
    });
    this.regions = [...new Set(this.regions)];
  },
  methods: {
    filterRegion() {
      this.$store.commit("country/filterRegion", this.region);
    },
    filterName() {
      this.$store.commit("country/filterByName", this.countryName);
    }
  }
};
</script>
<style scoped></style>
