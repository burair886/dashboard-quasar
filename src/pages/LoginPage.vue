<template>
  <div>
    <q-page padding class="flex flex-center">
      <q-form @submit="login">
        <q-card class="full-width" style="max-width: 350px">
          <q-card-section class="text-center">Login </q-card-section>
          <q-card-section>
            <q-input
              class="q-mb-md"
              outlined
              type="email"
              label="Email"
              v-model="form.email"
            ></q-input>
            <q-input
              outlined
              type="password"
              label="Password"
              v-model="form.password"
            ></q-input>
          </q-card-section>
          <q-btn
            class="full-width q-mt-md"
            type="submit"
            label="login"
            color="primary"
          ></q-btn>
        </q-card>
      </q-form>
    </q-page>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";

const form = reactive({
  email: "",
  password: "",
});
watch(form, () => {
  console.log(form);
});
const login = () => {
  console.log(form);
};
</script>
