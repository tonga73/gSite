<template>
  <Transition>
    <div v-if="setAlert()" class="absolute grid grid-cols-5 w-full">
      <div
        @load="simpleAnimation(animation)"
        :class="
          alertError
            ? 'bg-red-900 text-slate-200'
            : 'bg-pink-700 text-slate-200'
        "
        class="col-start-2 col-span-3 grid justify-center py-3 my-1 rounded-sm uppercase font-bold tracking-wide"
      >
        {{ alertMessage }}
      </div>
    </div>
  </Transition>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const alertMessage = computed(() => store.getters.alertMessage);
    const alertError = computed(() => store.getters.alertError);

    const setAlert = () => {
      setTimeout(() => {
        store.commit("SET_ALERT_STATE", { message: "", error: false });
      }, 3000);
      if (store.getters.alertMessage) {
        return true;
      }
    };

    return {
      alertMessage,
      alertError,
      setAlert,
    };
  },
};
</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  transform: translate(0px, -30px);
  opacity: 0;
}
</style>
