<template>
  <!-- <q-page-container> -->
  <q-page padding>
    <q-table :rows="data">
      <template #top>
        <q-btn
          color="primary"
          icon="add"
          @click="showDialog = true"
          class="q-mb-md"
          >Add Someone</q-btn
        >
      </template>
      <!-- <template #body-cell-name="props">
          <q-td :props="props">
            <q-input borderless dense v-model="props.row.name" />
          </q-td>
        </template>

        <template #body-cell-email="props">
          <q-td :props="props">
            <q-chip class="text-white" color="primary">
              {{ props.row.email }}
            </q-chip>
          </q-td>
        </template> -->
    </q-table>
    <q-dialog v-model="showDialog">
      <q-card style="max-width: 600px" class="full-width">
        <q-toolbar>
          <q-toolbar-title>Create User</q-toolbar-title>
          <q-btn
            flat
            color="primary"
            v-close-popup
            icon="close"
            round
            size="sm"
          />
        </q-toolbar>
        <q-card-section>
          <q-input
            class="q-mb-md"
            label="Name"
            type="text"
            v-model="form.name"
          />
          <q-input
            class="q-mb-md"
            label="Email"
            type="email"
            v-model="form.email"
          />
          <q-input
            class="q-mb-md"
            label="Password"
            type="password"
            v-model="form.password"
          />
        </q-card-section>
        <q-btn class="full-width" color="primary" @click="setUser">
          Create
        </q-btn>
      </q-card>
    </q-dialog>
  </q-page>
  <!-- </q-page-container> -->
</template>

<script setup>
import { ref, reactive } from "vue";
const form = reactive({
  email: "",
  name: "",
  password: "",
});
const setUser = () => {
  console.log(form);
  data.value.push({
    name: form.name,
    email: form.email,
    password: form.password,
  });
};

const showDialog = ref(false);

const data = ref([
  {
    name: "bunny",
    email: "test@test.com",
    password: "xyz",
  },
]);
// const columns = [
//   {
//     field: "id",
//     name: "id",
//     align: "center",
//     lable: "ID",
//   },
//   {
//     field: "name ",
//     align: "center",
//     lable: "Name",
//   },
// ];
</script>
