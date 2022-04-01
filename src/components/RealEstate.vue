<template>
    <section class="realEstate">
        <div class="invest">
            <div class="invest1">
                <h2>Real Estate Investments</h2>
                <p>Put your money to work by investing in our real estates,
you can also purchase properties.</p>
            </div>
            <div class="invest2">

            </div>
        </div>
        <div class="container my-5 experience">

    <Carousel :itemsToShow="itemsShow" :wrapAround="true">
      <Slide
        v-for="slide in carouselItem"
        :key="slide"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/carousel/' + slide.img + '.png') + ')',
        }"
        class="flex-column"
      >
        <!-- <div
          class="carousel__item bg-light p-3"
          style="
            position: absolute;
            bottom: -2rem;
            z-index: 2;
            width: 100%;
            height: 100px;
          "
        >
          {{ slide }}
        </div> -->

        <div
          class="w-100 mb-0 text-start justify-content-between py-2 px-2"
          style="background-color: white; border: none"
        >
          <h5 class="mb-0">{{ slide.title }}</h5>
          <p class="mb-0 small mt-2">
            {{ slide.location }}
            <span class="text-muted mx-2 small">&#11044;</span>
            {{ slide.experiences }}
          </p>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
    </section>
  
</template>
<script setup>
import { onMounted, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

const innerW = ref(window.innerWidth);

const itemsShow = ref(4);

const showNavigation = ref(null);

const carouselItem = ref([
  {
    img: "1",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    experiences: "6k Experiences",
  },
  {
    img: "2",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    experiences: "6k Experiences",
  },
  {
    img: "3",
    title: "Obudu Cattle Ranch",
    location: "Calabar, Nigeria",
    experiences: "66k Experiences",
  },
  {
    img: "4",
    title: "Bonny Island",
    location: "Enugu, Nigeria",
    experiences: "9m Experiences",
  },
  {
    img: "5",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    experiences: "6k Experiences",
  },
  {
    img: "3",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    experiences: "6k Experiences",
  },
]);

onMounted(() => {
  if (innerW.value < 768) {
    itemsShow.value = 1;
    showNavigation.value = false;
  } else {
    itemsShow.value = 4.98;
    showNavigation.value = true;
  }
});
</script>

<style>
.experience {
  width: 81.5%;
}
.experience .carousel__prev--in-active,
.experience .carousel__next--in-active {
  display: none;
}
.experience .carousel__track {
  gap: 1rem;
}
.experience .carousel__slide {
  height: 300px;
  /* background-size: 100% 100%; */
  width: 300px !important;
  justify-content: flex-end;
}
.experience .carousel__prev,
.experience .carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.1);
}
.experience .carousel__next {
  right: 0%;
  background: #fff;
  box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.1);
}
.experience .carousel__prev {
  left: 0rem;
  background: #fff;
}
.experience svg {
  fill: #292d32 !important;
}
.realEstate{
    background: #50AC95 !important;
    padding: 2rem 0;
}
.invest{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.invest1{
    color: white;
    padding-left: 9.5rem;
}



@media (max-width: 768px) {
  .experience {
    width: 100%;
  }
  .experience .carousel__slide {
    height: 350px;
    width: 100% !important;

    background-size: 100% 100%;
  }
  .experience .carousel__item {
    width: 100%;
  }
  .experience .carousel__prev,
  .experience .carousel__next {
    display: none;
  }
  .experience .carousel__track {
    gap: 0rem;
  }
  .invest{
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
}
.invest1{
    color: white;
    padding-left: 10px;
}
}
</style>

<style scoped>
h5 {
  font-weight: 700;
  color: #000000;
}
</style>

