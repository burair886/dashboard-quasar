<template>
  <q-page padding>
    <q-card v-for="item in inventory" :id="item.id" style="max-width: 300px">
      <q-img :src="item.imgSrc"></q-img>
      <h4 class="q-mb-sm q-mt-sm q-ml-md">
        {{ item.name }}
        <q-chip
          v-for="category in item.categories"
          :key="category.id"
          :color="category.color"
          :label="category.name"
          class="text-white q-mb-sm"
        />
      </h4>

      <q-card-section class="q-px-md p-pb-md">
        {{ item.description }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
const inventory = [
  {
    id: "1",
    name: "cat",
    description: "lorem",
    imgSrc: "https://picsum.photos/300/180",
    categories: [
      {
        name: "cat",
        color: "green",
      },
      {
        name: "panda",
        color: "blue",
      },
    ],
  },
];
</script>
