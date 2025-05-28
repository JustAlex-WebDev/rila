<script setup lang="ts"></script>

<template>
  <v-app>
    <v-main>
      <slot />
    </v-main>

    <v-footer
      app
      class="flex-column bg-white py-4 text-center text-medium-emphasis"
      style="position: relative"
    >
      <!-- Copyright Section -->
      <v-row class="pt-2 d-flex justify-end align-end">
        <v-col>
          <!-- SKYWARE Group with Tooltip -->
          <client-only>
            <v-tooltip location="bottom" :open-delay="700" :close-delay="300">
              <template v-slot:activator="{ props }">
                <NuxtLink
                  to="http://www.skyware-group.com/"
                  target="_blank"
                  v-bind="props"
                  class="text-body-2 text-medium-emphasis text-decoration-none"
                >
                  SKYWARE Group
                </NuxtLink>
              </template>

              <!-- Tooltip text -->
              <span>Посетете уеб сайтът на SKYWARE Group</span>
            </v-tooltip>

            <!-- Current year -->
            <span class="text-body-2">© {{ new Date().getFullYear() }}.</span>
          </client-only>

          <!-- Current version -->
          <span class="text-body-2"> Всички права запазени. </span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
