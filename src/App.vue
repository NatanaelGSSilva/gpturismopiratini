<template>
  <div id="app">
    <SideBarMenu :user="user" :excursao_id="excursao_id" />

  </div>
</template>

<script>
import SideBarMenu from "./components/SideBarMenu.vue";

export default {
  name: "App",
  components: {
    SideBarMenu
  },
  data() {
    return {
      user: null,
      excursao_id: null
    };
  },
  methods: {
    mudaUser(nome) {
      this.user = nome;
    },
    mudaExcursao(id) {
      this.excursao_id = id;
    },
  }
};
</script>

<style>
</style>
