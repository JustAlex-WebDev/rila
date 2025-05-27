<script setup lang="ts">
import { ref } from "vue";

const model = ref<number>(1);

// Tabs
const leftTabs = [
  { value: 1, icon: "mdi-home-outline", label: "Начало" },
  { value: 2, icon: "mdi-view-dashboard-outline", label: "Администраторски панел" },
];

const rightTabs = [{ value: 3, icon: "mdi-code-json", label: "Swagger" }];
</script>

<template>
  <v-container fluid class="pa-0 d-flex flex-column" height="100%">
    <!-- Top Header -->
    <div class="border-b border-grey-lighten-2 py-4 px-4">
      <div class="mx-auto d-flex align-center justify-space-between" style="max-width: 1320px">
        <a href="https://skyware-group.com/" target="_blank" rel="noopener">
          <v-img
            src="/skyware-extra-simpified.svg"
            alt="SKYWARE Group Logo"
            height="24"
            width="auto"
            loading="lazy"
          />
        </a>
        <span class="text-h5">Rila</span>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="border-b border-grey-lighten-2 px-4">
      <div class="mx-auto" style="max-width: 1320px">
        <v-tabs
          v-model="model"
          align-tabs="center"
          active-color="primary"
          base-color="black"
          class="w-100"
        >
          <v-tab
            v-for="tab in leftTabs"
            :key="tab.value"
            :value="tab.value"
            :prepend-icon="tab.icon"
            :text="tab.label"
            rounded="none"
            class="py-2 text-body-2 text-black"
            slider-color="primary"
          />

          <v-spacer />

          <v-tab
            v-for="tab in rightTabs"
            :key="tab.value"
            :value="tab.value"
            :prepend-icon="tab.icon"
            :text="tab.label"
            rounded="none"
            class="py-2 text-body-2 text-black"
            slider-color="primary"
          />
        </v-tabs>
      </div>
    </div>

    <v-divider />
  </v-container>
</template>
