import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import { VIconBtn } from "vuetify/labs/VIconBtn";
import { md3 } from "vuetify/blueprints";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

// Import all Vuetify components and directives
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  // Initialize Vuetify
  const vuetify = createVuetify({
    components: {
      ...components,
      VIconBtn,
    },
    directives,
    blueprint: md3,
    icons: {
      defaultSet: "mdi",
    },
  });

  // Apply Vuetify
  nuxtApp.vueApp.use(vuetify);
});
