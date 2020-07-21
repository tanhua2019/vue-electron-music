<template>
  <div class="item" @click="playPlaylists(item.id)">
    <img :src="item.picUrl" />
    <div class="item-num">
      <i class="el-icon-headset"></i>
      {{item.playCount | filterQty}}</div>
    <span>{{item.name}}</span>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    ...mapState({
      isPlay: state => state.player.isPlay,
    })
  },
  methods: {
    ...mapActions(['playPlaylist']),
    playPlaylists(id) {
      this.playPlaylist({isPlay: !this.isPlay, id: id })
    }
  }
};
</script>
<style lang='scss' scoped>
.item {
  position: relative;
  img {
    width: 100%;
    padding-bottom: 5px;
  }
  &-num {
    padding: 5px 10px 5px 50px;
    text-align: right;
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.2 );
  }
  span {
    display: block;
    height: 36px;
    font-size: 16px;
  }
}
</style>