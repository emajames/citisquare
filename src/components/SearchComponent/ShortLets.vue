<template>
  <form class="search row ps-3">
    <div class="col-md-4 search_input">
      <img src="@/assets/icons/global-search.png" alt="" />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search locations "
        required
      />
    </div>
    <div class="col-md-3 relative date_input" style="position: relative">
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
    <div class="col-md-3 relative date_input mt-0" style="position: relative">
      <img src="@/assets/icons/empty-wallet.png" alt="" />
      <select name="" id="" class="align-self-center">
        <option>Select price range</option>
      </select>
    </div>
    <button type="submit" class="col-md-2 search__btn">Search</button>
  </form>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: { Datepicker },
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
.search .dp__input,
.search select {
  border: none !important;
  outline: none;
  font-size: small;
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

input[type="text"],
select {
  /* width: 100%; */
  border: none;
  outline: none;
  margin-left: 1.5rem;
  font-size: small;
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
  select {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .search {
    width: 90%;
    margin: 0px auto;
    height: 80px;
    top: 5rem;
    align-items: center;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
}
</style>
