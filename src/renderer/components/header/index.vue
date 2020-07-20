<template>
  <div class="drag content">
    <div class="head-left"></div>
    <div class="head-right">
      <el-button size="mini" type class="no-drag" @click="clickMin">
        <i class="el-icon-minus"></i>
      </el-button>
      <el-button size="mini" type class="no-drag" @click="clickClose">
        <i class="el-icon-close"></i>
      </el-button>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    clickMin() {
      this.$electron.ipcRenderer.send("clickMin");
    },
    clickClose() {
      this.$confirm("此操作将关闭页面，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$electron.ipcRenderer.send('clickClose')
      }).catch(() => {})
    }
  }
};
</script>
<style lang='scss' scoped>
.content {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>