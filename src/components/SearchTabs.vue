<template>
  <div class="container my-5">
    <ul class="nav nav-pills justify-content-center  mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-experiences-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-experiences"
          type="button"
          role="tab"
          aria-controls="pills-experiences"
          aria-selected="true"
        >
          Experiences
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-vacation-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-vacation"
          type="button"
          role="tab"
          aria-controls="pills-vacation"
          aria-selected="false"
        >
          Vacation
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-shortlet-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-shortlet"
          type="button"
          role="tab"
          aria-controls="pills-shortlet"
          aria-selected="false"
        >
          Short Lets
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-spa-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-spa"
          type="button"
          role="tab"
          aria-controls="pills-spa"
          aria-selected="false"
        >
          Spa
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          Real Estate Investments
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-financial-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-financial"
          type="button"
          role="tab"
          aria-controls="pills-financial"
          aria-selected="false"
        >
          Financial Services
        </button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-experiences"
        role="tabpanel"
        aria-labelledby="pills-experiences-tab"
      >
        <ExperienceSearchBar />
      </div>
      <div
        class="tab-pane fade"
        id="pills-vacation"
        role="tabpanel"
        aria-labelledby="pills-vacation-tab"
      >
        <ExperienceSearchBar />
      </div>

      <div
        class="tab-pane fade"
        id="pills-shortlet"
        role="tabpanel"
        aria-labelledby="pills-shortlet-tab"
      >
        <ShortLets />
      </div>
      <div
        class="tab-pane fade"
        id="pills-spa"
        role="tabpanel"
        aria-labelledby="pills-spa-tab"
      >
        <Spa />
      </div>
      <div
        class="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
      >
        <RealEstate />
      </div>
      <div
        class="tab-pane fade"
        id="pills-financial"
        role="tabpanel"
        aria-labelledby="pills-financial-tab"
      >
        <Spa />
      </div>
    </div>
  </div>
</template>

<script>
import ExperienceSearchBar from "@/components/SearchComponent/Experience";
import ShortLets from "@/components/SearchComponent/ShortLets";
import Spa from "@/components/SearchComponent/Spa";
import RealEstate from "@/components/SearchComponent/RealEstate";
export default {
  components: {
    ExperienceSearchBar,
    ShortLets,
    Spa,
    RealEstate,
  },
};
</script>

<style scoped>
ul {
  gap: 1rem;
}
.nav-link {
  color: #000000;
  width: 160px;
  height: 55px;
  border-radius: 0px;
  border: 1px solid #000000;
  font-size: small;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background: #50ac95;
  border: none;
}


@media (max-width: 768px) {
  .nav-pills .nav-link {
    width: max-content;
    height: max-content;
    border: 1px solid #b9bcbb;
    border-radius: 10px;
    color: #b9bcbb;
  }
}
</style>
