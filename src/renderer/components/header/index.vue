<template>
  <div class="drag content">
    <div class="head-left">
      <i class="el-icon-headset" />小胖音乐
    </div>
    <div class="head-right">
      <el-button size="mini" type="text" class="no-drag" @click="clickMin">
        <i class="btn el-icon-minus"></i>
      </el-button>
      <el-button type="text" size="mini" class="no-drag" @click="clickMax">
        <i :class="[isMax?'el-icon-full-screen':'el-icon-copy-document','btn']"></i>
      </el-button>
      <el-button size="mini" type="text" class="no-drag" @click="clickClose">
        <i class="btn el-icon-close"></i>
      </el-button>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  name: "",
  data() {
    return {
      isMax: false,
    };
  },
  methods: {
    clickMin() {
      this.$electron.ipcRenderer.send("clickMin");
    },
    clickMax() {
      this.isMax = this.$electron.remote.getCurrentWindow().isMaximized()
      this.$electron.ipcRenderer.send("clickMax");
    },
    clickClose() {
      this.$confirm("此操作将关闭页面，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$electron.ipcRenderer.send("clickClose");
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang='scss' scoped>
.content {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  background: rgba($color: #C20C0C, $alpha: 0.8) ;
  padding: 0 20px;
  .head-left {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
  .btn {
    font-size: 18px;
    color: #aaa;
  }
  .btn:hover {
    color: #fff;
  }
}
</style>