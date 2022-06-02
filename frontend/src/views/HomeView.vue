<template>
  <Header />
  <div class="container mx-auto">
    <Modal />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/layouts/Header.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Header,
    Modal,
  },
  setup() {
    const coso = JSON.parse(localStorage.getItem("user"));

    return { coso };
  },
};
</script>
