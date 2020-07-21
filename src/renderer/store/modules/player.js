import { getSongDetail, getMusicUrl, getPlaylistDetail } from '../../api'
export default {
  state: {
    isPlay: false,
    list: null,
    song: {},
    musicUrl: null,
    currentTime: 0,
  },
  mutations: {
    setPlayState: (state, data) => {
      Object.keys(data).forEach(v => state[v] = data[v])
    },
    setPlayList: (state, data) => {
      state.list = data;
    }
  },
  actions: {
    playMusic: ({ commit, state }, data) => {
      getSongDetail(data.id).then(res => {
        commit('setPlayState', { song: res.songs[0] })
      });
      getMusicUrl(data.id).then(res => {
        commit('setPlayState', { musicUrl: res.data[0].url, isPlay: data.isPlay })
      })
    },
    playPlaylist({ commit, dispatch }, data) {
      getPlaylistDetail(data.id).then(res => {
        commit('setPlayList', res.playlist.tracks);
        dispatch('playMusic', {id: res.playlist.tracks[Math.floor(Math.random()* res.playlist.tracks.length)].id, isPlay: data.isPlay})
      })
    }
  }
}