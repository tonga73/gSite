<template>
  <button @click="logOut" class="p-5 bg-pink-700 rounded-sm">SALIR</button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const isLoggedIn = computed(() => store.getters.checkLogInState);

    const logIn = () => {
      store.dispatch("logInUser", true);
      router.push("/");
    };

    return {
      logIn,
      isLoggedIn,
    };
  },
};
</script>
