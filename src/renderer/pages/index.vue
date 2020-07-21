<template>
<el-scrollbar  class="main-box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个性推荐" name="recommend"></el-tab-pane>
      <el-tab-pane label="歌单" name="second"></el-tab-pane>
      <el-tab-pane label="主播电台" name="third"></el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth"></el-tab-pane>
      <el-tab-pane label="歌手" name></el-tab-pane>
      <el-tab-pane label="最新音乐" name></el-tab-pane>
    </el-tabs>
    <div class="main-body">
      <transition name="el-fade-in-linear">
        <recommend v-if="activeName==='recommend'" />
        <playlist v-if="activeName==='second'" />
      </transition>
    </div>
</el-scrollbar>
  
</template>

<script>
import recommend from "./recommend";
import playlist from "./playlist";
export default {
  data() {
    return {
      activeName: "recommend"
    };
  },
  components: {
    recommend,
    playlist
  },
  methods: {
    handleClick() {}
  }
};
</script>
<style lang='scss' scoped>
/deep/.el-scrollbar__wrap {
  overflow-x: hidden;
}
.main-box {
  display: flex;
  flex: 1;
  flex-direction: column;
  // overflow: hidden;
  /deep/ .el-tabs {
    height: 40px;
    
    // background: #fafafa;
    .el-tabs__nav-scroll {
      display: flex;
      justify-content: center;
      padding: 0;
    }
    .el-tabs__nav-wrap::after {
      display: none;
    }
    .el-tabs__item.is-active {
      color: #C20C00;
    }
    .el-tabs__active-bar {
      background-color: #C20C0C;
    }
    .el-tabs__item:hover {
      color: #C20C0C;
    }
  }
  .main-body {
    // background: #f0f0f0;
    flex: 1;
    display: flex;
    // overflow: hidden;
  }
}
</style>