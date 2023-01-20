<template>
  <q-list class="q-mt-md">
    <q-item>
      <q-item-section>
        <q-item-lable>Menu</q-item-lable>
      </q-item-section>
    </q-item>
    <q-item v-for="item in menuItems" :key="item.label" :to="item.to">
      <q-item-section>
        <!-- Users -->
        {{ item.label }}
        <!-- <UsersPage /> -->
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import menuItems from "./menuItems";
// import UsersPage from "src/pages/UsersPage.vue";
</script>

<style></style>
