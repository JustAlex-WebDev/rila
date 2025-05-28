<script setup lang="ts">
import { ref } from "vue";

const model = ref<number>(2);

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
    <div class="border-b border-grey-lighten-2 py-4 pr-4">
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

    <!-- Page Title -->
    <div class="px-4 my-4">
      <div class="mx-auto d-flex flex-wrap align-center" style="max-width: 1320px">
        <h3>Информация за Rila</h3>
        <v-btn
          icon="mdi-refresh"
          variant="text"
          color=""
          class="opacity-50"
          style="width: 44px; height: 44px"
        ></v-btn>
        <v-checkbox :model-value="true" :hide-details="true" color="primary"></v-checkbox>
        <h3>Автоматично презареждане</h3>
      </div>
    </div>

    <!-- Status Container -->
    <div class="px-4">
      <div
        class="mx-auto d-flex flex-column border border-grey-lighten-2 rounded"
        style="max-width: 1320px"
      >
        <!-- Status -->
        <span class="border-b border-grey-lighten-2 py-4 px-6">Статус</span>

        <v-row class="py-4 px-6 w-100" align="start" gap="4">
          <!-- Version -->
          <v-col cols="12" sm="6" md="4" lg="3" class="d-flex flex-column ga-2">
            <span
              class="text-uppercase font-weight-bold opacity-60"
              style="font-size: 0.625rem; letter-spacing: 0.04em"
            >
              Версия
            </span>

            <div class="d-flex align-center ga-0">
              <span class="text-body-2"> 2.6.0 </span>
              <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
            </div>
          </v-col>

          <!-- Instance -->
          <v-col cols="12" sm="6" md="4" lg="3" class="d-flex flex-column ga-2">
            <span
              class="text-uppercase font-weight-bold opacity-60"
              style="font-size: 0.625rem; letter-spacing: 0.04em"
            >
              Инстанция
            </span>

            <div class="d-flex align-center ga-0">
              <span class="text-body-2"> МДЛ Ботевград ЕООД-dev </span>
              <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
            </div>
          </v-col>

          <!-- Server Time -->
          <v-col cols="12" sm="6" md="4" lg="3" class="d-flex flex-column ga-2">
            <span
              class="text-uppercase font-weight-bold opacity-60"
              style="font-size: 0.625rem; letter-spacing: 0.04em"
            >
              Сървърно време
            </span>

            <div class="d-flex align-center ga-0">
              <span class="text-body-2"> 27/05/2025 17:49:59 </span>
              <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
            </div>
          </v-col>

          <!-- User -->
          <v-col cols="12" sm="6" md="4" lg="3" class="d-flex flex-column ga-2">
            <span
              class="text-uppercase font-weight-bold opacity-60"
              style="font-size: 0.625rem; letter-spacing: 0.04em"
            >
              Потребител
            </span>

            <div class="d-flex align-center ga-0">
              <span class="text-body-2">Rila</span>
              <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
            </div>
          </v-col>

          <!-- Internet Connectivity -->
          <v-col cols="12" sm="6" md="4" lg="3" class="d-flex flex-column ga-2">
            <span
              class="text-uppercase font-weight-bold opacity-60"
              style="font-size: 0.625rem; letter-spacing: 0.04em"
            >
              Достъп до интернет
            </span>

            <div class="d-flex align-center ga-0">
              <span class="text-body-2">Свързан</span>
              <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
            </div>
          </v-col>

          <!-- Environment -->
          <v-col cols="12" sm="6" md="4" lg="3" class="d-flex flex-column ga-2">
            <span
              class="text-uppercase font-weight-bold opacity-60"
              style="font-size: 0.625rem; letter-spacing: 0.04em"
            >
              Среда
            </span>

            <div class="d-flex align-center ga-0">
              <span class="text-body-2">Тестова</span>
              <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>
