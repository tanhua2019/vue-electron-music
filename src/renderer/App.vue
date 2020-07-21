<template>
  <div id="app">
    <el-container class="container">
      <el-header style="height: 50px;padding: 0">
        <Header></Header>
      </el-header>
      <el-main style="padding: 0; display:flex" >
        <router-view></router-view>
      </el-main>
      <el-footer style="padding: 0">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from './components/footer'
export default {
  name: "vue-electron-music",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import url(./assets/styles/public.scss);
html,
body {
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
}
</style>
