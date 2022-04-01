import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// DatePicker
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import VueGoogleAutocomplete from "vue-google-autocomplete";

createApp(App)
  .use(store)
  .use(router)
  .component("Datepicker", Datepicker)
  .component("VueGoogleAutocomplete", VueGoogleAutocomplete)
  .mount("#app");
