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
      <div class="mx-auto d-flex flex-wrap align-center ga-0" style="max-width: 1320px">
        <!-- Heading -->
        <h3>Информация за Rila</h3>

        <!-- Manually refresh -->
        <v-btn icon="mdi-refresh" variant="text" color="" class="opacity-50"></v-btn>

        <v-checkbox
          :model-value="true"
          :hide-details="true"
          color="primary"
          label="Автоматично презареждане"
        ></v-checkbox>
      </div>
    </div>

    <!-- Status Container -->
    <div class="px-4">
      <div
        class="mx-auto d-flex flex-column border border-grey-lighten-2 rounded"
        style="max-width: 1320px"
      >
        <!-- Status -->
        <span class="border-b border-grey-lighten-2 py-4 px-6 font-weight-bold">Статус</span>

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

    <!-- Sessions Container -->
    <v-sheet class="px-4 mt-6 bg-white">
      <v-container max-width="1320px" class="px-0 py-0 d-flex">
        <v-row class="w-100" align="start" justify="space-between">
          <!-- Session -->
          <v-col cols="12" md="6" class="d-flex flex-column ga-2">
            <v-sheet
              color="green-lighten-5"
              class="d-flex flex-column border border-grey-lighten-2 text-green"
              tile
              rounded
            >
              <!-- Session Header -->
              <div
                class="d-flex align-center justify-space-between flex-wrap py-4 px-6 border-b border-grey-lighten-2"
              >
                <!-- Title -->
                <div class="d-flex flex-column">
                  <small>Активна сесия</small>
                  <span>0jCgJpdQZ9iWxgLth92PTbWH3zsdcwpP</span>
                </div>

                <!-- Actions -->
                <div class="d-flex ga-0">
                  <v-icon-btn
                    icon="mdi-play-circle-outline"
                    variant="text"
                    color="grey-darken-1"
                    rounded="lg"
                    v-ripple
                    style="width: 40px; height: 40px; scale: 0.8"
                  ></v-icon-btn>

                  <v-icon-btn
                    icon="mdi-cloud-arrow-down-outline"
                    variant="text"
                    color="grey-darken-2"
                    rounded="lg"
                    v-ripple
                    style="width: 40px; height: 40px; scale: 0.8"
                  ></v-icon-btn>

                  <v-icon-btn
                    icon="mdi-cloud-lock-outline"
                    variant="text"
                    color="grey-darken-2"
                    rounded="lg"
                    v-ripple
                    style="width: 40px; height: 40px; scale: 0.8"
                  ></v-icon-btn>
                </div>
              </div>

              <!-- Session Body -->
              <v-row class="py-4 px-6 w-100" align="start" gap="4">
                <!-- Name -->
                <v-col cols="12">
                  <span class="text-uppercase"> MARIYA NIKOLAEVA RACHEVA-ANGELOVA </span>
                </v-col>

                <!-- Remaining Time -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    Оставащо време
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">01:19:56</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Protection Schema -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    Схема за защита
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">Без защита</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    Схема за удостоверяване
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">Със запитване</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    Политика сесия
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">Поддъръжай активна</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    УИН на лекар
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">2400000307</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- НЗИС Регион -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    НЗИС Регион
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">2303</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    НЗИС Специалност
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">1025</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    НЗОК Специалност
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">09</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    РЦЗ Номер
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">2307141018</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    Сериен номер
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">55465bc0dc641e2c</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <!-- Session -->
          <v-col cols="12" md="6" class="d-flex flex-column ga-2">
            <v-sheet
              color="green-lighten-5"
              class="d-flex flex-column border border-grey-lighten-2 text-green"
              tile
              rounded
            >
              <!-- Session Header -->
              <div
                class="d-flex align-center justify-space-between flex-wrap py-4 px-6 border-b border-grey-lighten-2"
              >
                <!-- Title -->
                <div class="d-flex flex-column">
                  <small>Активна сесия</small>
                  <span>488PnawmBkzWjH7kHgHK3dWAHZX2ordo</span>
                </div>

                <!-- Actions -->
                <div class="d-flex ga-0">
                  <v-icon-btn
                    icon="mdi-play-circle-outline"
                    variant="text"
                    color="grey-darken-1"
                    rounded="lg"
                    v-ripple
                    style="width: 40px; height: 40px; scale: 0.8"
                  ></v-icon-btn>

                  <v-icon-btn
                    icon="mdi-cloud-arrow-down-outline"
                    variant="text"
                    color="grey-darken-2"
                    rounded="lg"
                    v-ripple
                    style="width: 40px; height: 40px; scale: 0.8"
                  ></v-icon-btn>

                  <v-icon-btn
                    icon="mdi-cloud-lock-outline"
                    variant="text"
                    color="grey-darken-2"
                    rounded="lg"
                    v-ripple
                    style="width: 40px; height: 40px; scale: 0.8"
                  ></v-icon-btn>
                </div>
              </div>

              <!-- Session Body -->
              <v-row class="py-4 px-6 w-100" align="start" gap="4">
                <!-- Name -->
                <v-col cols="12">
                  <span class="text-uppercase">NELI KONSTANTINOVA PENEVA-IVANOVA</span>
                </v-col>

                <!-- Remaining Time -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    Оставащо време
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">01:19:56</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Protection Schema -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    Схема за защита
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">Без защита</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    Схема за удостоверяване
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">Със запитване</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    Политика сесия
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">Поддъръжай активна</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    УИН на лекар
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">2400000339</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- НЗИС Регион -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    НЗИС Регион
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">2303</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    НЗИС Специалност
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">1025</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    НЗОК Специалност
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">41</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    РЦЗ Номер
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">2307141018</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>

                <!-- Version -->
                <v-col cols="12" sm="6" class="d-flex flex-column ga-2">
                  <span
                    class="text-uppercase text-grey-darken-4 font-weight-bold opacity-60"
                    style="font-size: 0.625rem; letter-spacing: 0.04em"
                  >
                    Сериен номер
                  </span>

                  <div class="d-flex align-center ga-0">
                    <span class="text-body-2">7fb07cebb3593b66</span>
                    <v-btn variant="plain" icon="mdi-content-copy" color="" size="x-small"></v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Found Certificates Container -->
    <v-sheet class="px-4 mt-6 bg-white">
      <v-container :elevation="0" max-width="1320px" class="px-0 py-0 d-flex">
        <v-row :elevation="0" class="w-100" align="start" justify="space-between">
          <!-- Session -->
          <v-col :elevation="0" cols="12" class="d-flex flex-column ga-2">
            <v-sheet
              color="white"
              :elevation="0"
              class="d-flex flex-column border border-grey-lighten-2"
              tile
              rounded
            >
              <!-- Header -->
              <div class="py-4 px-6 border-b border-grey-lighten-2">
                <!-- Title -->
                <span class="font-weight-bold">Намерени сертификати</span>
              </div>

              <!-- Body -->
              <div class="py-4 px-6 border-b border-grey-lighten-2">
                <span>55465BC0DC641E2C</span>
              </div>

              <div class="py-4 px-6">
                <span>7FB07CEBB3593B66</span>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>
</template>
