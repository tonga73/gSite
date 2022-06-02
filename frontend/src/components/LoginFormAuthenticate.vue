<template>
  <h1
    class="text-center py-5 text-6xl font-thin uppercase text-slate-900 text-opacity-50 dark:text-white dark:text-opacity-50"
  >
    Iniciar Sesion
  </h1>
  <form
    class="p-10 rounded-md shadow-sm shadow-pink-700 border border-opacity-50 border-pink-700"
  >
    <div class="mb-6">
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
        >Your email</label
      >
      <input
        v-model="loginUserForm.email"
        placeholder="correo@correo.com"
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-sm focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-slate-900 dark:text-gray-300"
        >Your password</label
      >
      <input
        v-model="loginUserForm.password"
        placeholder="****"
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-sm focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
      />
    </div>
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          value=""
          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-pink-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-pink-600 dark:ring-offset-gray-800"
        />
      </div>
      <label
        for="remember"
        class="ml-2 text-sm font-medium text-slate-900 dark:text-gray-300"
        >Remember me</label
      >
    </div>
    <button
      type="button"
      @click="handleSubmit"
      class="uppercase text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-bold rounded-sm text-sm w-full px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
    >
      Iniciar Sesión
    </button>
  </form>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const initialState = {
      email: "",
      password: "",
    };

    const loginUserForm = reactive(initialState);

    const handleSubmit = () => {
      const { email, password } = loginUserForm;

      const user = {};

      function isBlank(str) {
        return !str || /^\s*$/.test(str);
      }

      if (!isBlank(email) || !isBlank(password)) {
        user.email = email;
        user.password = password;
      }

      store.dispatch("logInUser", user);
    };

    return {
      loginUserForm,
      handleSubmit,
    };
  },
};
</script>

<style></style>
