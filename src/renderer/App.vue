<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/header";
export default {
  name: "vue-electron-music",
  components: {
    Header,
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
@import url(./assets/styles/public.scss);
</style>
