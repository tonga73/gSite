<template>
  <Alert />
  <div class="caca">
    <router-view />
  </div>
</template>

<script>
import { useStore } from "vuex";
import Alert from "./components/Alert.vue";

export default {
  setup() {
    const store = useStore();
  },
  components: { Alert },
};
</script>
