<template>
  <input
    v-if="Boolean(google)"
    ref="autocomplete"
    type="text"
    class="form-control"
    :value="value"
    :placeholder="placeholder"
    autocomplete="off"
  />
</template>

<script>
export default {
  props: {
    google: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({
        componentRestrictions: { country: "ng" },
      }),
    },
    value: String,
    placeholder: String,
  },
  data() {
    return {
      autocomplete: null,
    };
  },
  mounted() {
    this.initAutocomplete();
  },
  methods: {
    initAutocomplete() {
      const Container = this.$refs.autocomplete;
      this.autocomplete = new this.google.maps.places.Autocomplete(
        Container,
        this.options
      );
      this.geolocate(this.google, this.autocomplete);
      // this.autocomplete.setOptions({strictBounds: true})
      this.autocomplete.addListener("place_changed", this.placeChanged);
    },

    placeChanged() {
      this.$emit("placeChanged", this.autocomplete);
    },

    geolocate(google, autocomplete) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          let geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          let circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy,
          });
          autocomplete.setBounds(circle.getBounds());
        });
      }
    },
  },
};
</script>

<style type="text/css">
.pac-container {
  padding-bottom: 5px;
}
.pac-item {
  padding: 5px;
}
.pac-icon {
  margin: 5px 10px;
}
</style>
