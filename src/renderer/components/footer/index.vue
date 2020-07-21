<template>
  <div class="footer">
    <div class="footer-left">
      <i class="el-icon-arrow-left"></i>
      <i :class="[isPlay? 'el-icon-video-pause':'el-icon-video-play']" @click="StartPlayer"></i>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="footer-center">
      <audio v-show="false" ref="audio" :src="musicUrl" preload />
      <div>{{time*1000| formatDuring}}</div>
      <el-slider class="sliders" v-model="time" @change="changeTime" :max="song.dt/1000"></el-slider>
      <div>{{song.dt |formatDuring}}</div>
    </div>
    <div class="footer-right">
      <span>标准</span>
      <span>词</span>
      <i class="el-icon-switch-button"></i>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      isPlay: state => state.player.isPlay,
      musicUrl: state => state.player.musicUrl,
      currentTime: state => state.player.currentTime,
      song: state => state.player.song
    })
  },
  data() {
    return {
      audio: null,
      interval: null,
      time: null
    };
  },
  watch: {
    isPlay(val) {
      //解决点击没渲染完报错
      this.$nextTick(() => {
        this.audio = this.$refs["audio"];
        if (val) {
          this.audio.play();
          this.getPlayTime();
        } else {
          this.audio.pause();
          clearInterval(this.interval);
        }
      });
    },
    currentTime(val) {
      this.time = val;
    }
  },
  methods: {
    ...mapMutations(["setPlayState"]),
    StartPlayer() {
      this.setPlayState({ isPlay: !this.isPlay });
    },
    getPlayTime() {
      this.interval = setInterval(() => {
        this.$store.commit("setPlayState", {
          currentTime: this.audio.currentTime
        });
      }, 1000);
    },
    changeTime(val) {
      this.audio.currentTime = val;
      this.setPlayState({ currentTime: val });
    }
  }
};
</script>
<style lang='scss' scoped>
.footer {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #fafafa;
  &-left {
    width: 140px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    i {
      display: block;
      width: 25px;
      height: 25px;
      background: rgba($color: #c20c0c, $alpha: 0.8);
      border-radius: 50%;
      padding: 5px;
      font-size: 25px;
      color: #fff;
    }
  }
  &-center {
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    .sliders {
      width: 80%;
    }
  }
  &-right {
    span {
      border: 1px solid #ccc;
      padding: 1px 3px;
      margin: 0 10px;
    }
    i {
      font-size: 20px;
    }
  }
}
</style>