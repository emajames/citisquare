<template>
  <form class="search row ps-3">
    <div class="col-md-5 search_input">
      <img src="@/assets/icons/global-search.png" alt="" class="me-1" />
      <!-- <input
        type="text"
        name=""
        id=""
        placeholder="Search locations "
        required
      /> -->

      <vue-google-autocomplete
        v-on:placechanged="getAddressData"
        id="homemapsss"
        placeholder="Search locations "
        required
      >
      </vue-google-autocomplete>
    </div>
    <div class="col-md-5 relative date_input" style="position: relative">
      <Datepicker
        v-model="date"
        range
        :placeholder="date"
        :lowerLimit="new Date()"
        required
      ></Datepicker>
      <img
        src="@/assets/icons/caret_down.png"
        alt=""
        style="position: absolute; right: 2rem; top: 40%"
      />
    </div>
    <button type="submit" class="col-md-2 search__btn">Search</button>
  </form>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  components: { Datepicker, VueGoogleAutocomplete },
  data() {
    return {
      date: new Date().toISOString().slice(0, 10),
    };
  },
  methods: {
    changeDate() {
      console.log(9);
    },
  },
};
</script>

<style>
.dp__input {
  border: none !important;
  outline: none;
}
</style>
<style scoped>
.search {
  width: 100%;
  position: relative;
  top: 1rem;
  z-index: 1;
  background: #fff;
}

input[type="text"] {
  width: 90%;
  border: none;
  outline: none;
  font-size: small;
  height: 100%;
}

input:focus {
  box-shadow: none;
}

.search__btn {
  outline: none;
  border: none;
  height: 100%;
  background: #50ac95;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
@media (max-width: 768px) {
  .search_input {
    height: 55px;
    align-items: center;
    display: flex;
    border: 1px solid #50ac95;
    border-radius: 2px;
  }
  .date_input {
    height: 55px;
    align-items: center;
    display: flex;
    border: 1px solid #b9bcbb;
    border-radius: 2px;
    margin: 1.5rem 0;
  }
  .search__btn {
    height: 55px;
  }
}
@media (min-width: 768px) {
  .search {
    width: 80%;
    margin: 0px auto;
    height: 80px;
    top: 5rem;
    align-items: center;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
}
</style>
