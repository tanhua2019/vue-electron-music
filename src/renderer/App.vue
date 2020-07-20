<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { personalized } from "./api";
export default {
  name: "vue-electron-music",
  mounted() {
    this.getPersonalized();
  },
  methods: {
    getPersonalized() {
      personalized().then(res => {
        this.personalized = res.result;
        console.log(res,'999');
      });
    }
  }
};
</script>

<style>
/* CSS */
</style>
