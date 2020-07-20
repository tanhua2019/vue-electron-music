<template>
  <div class="main-box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个性推荐" name="first"></el-tab-pane>
      <el-tab-pane label="歌单" name="second"></el-tab-pane>
      <el-tab-pane label="主播电台" name="third"></el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth"></el-tab-pane>
      <el-tab-pane label="歌手" name></el-tab-pane>
      <el-tab-pane label="最新音乐" name></el-tab-pane>
    </el-tabs>
    <div class="main-body">
      <transition name="el-fade-in-linear">
        <choiceness v-if="activeName==='first'" />
        <playlist v-if="activeName==='second'" />
      </transition>
    </div>
  </div>
</template>

<script>
import choiceness from "./choiceness";
import playlist from "./playlist";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    choiceness,
    playlist
  },
  methods: {
    handleClick() {}
  }
};
</script>
<style lang='scss' scoped>
.main-box {
  /deep/ .el-tabs {
    height: 40px;
    background: #fafafa;
    .el-tabs__nav-scroll {
      display: flex;
      justify-content: center;
      padding: 0;
    }
    .el-tabs__nav-wrap::after {
      display: none;
    }
  }
  .main-body {
    background: #f0f0f0;
    flex: 1;
    // overflow: hidden;
    display: flex;
  }
}
</style>