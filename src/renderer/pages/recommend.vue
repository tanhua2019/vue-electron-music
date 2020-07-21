<template>
  <div class="recommend-box">
    <div class="header">
      <div class="header-left">推荐歌单</div>
      <div class="header-right">更多></div>
    </div>
    <el-row :gutter="15" >
      <el-col :span="6" v-for="(item,index) in musicList" :key="index" style="margin-top: 10px;">
        <ListItem :item="item" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { personalized } from "../api";
import ListItem from "./child/list-item";
export default {
  name: "",
  data() {
    return {
      musicList: []
    };
  },
  components: {
    ListItem
  },
  created() {
    this.personalized();
  },
  methods: {
    personalized() {
      personalized().then(res => {
        this.musicList = res.result;
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.recommend-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px 40px 0 40px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 15px 0;
    &-left {
      font-size: 20px;
      color: #000;
      user-select: none;
    }
    &-right {
      font-size: 13px;
      color: #aaa;
      cursor: pointer;
    }
  }
}
</style>