import request from './axios.api'

//手机登录
export function login(phone, password) {
    return request.get('/login/cellphone?phone=' + phone + '&password=' + password)
}

export function banner() {
    return request.get('/banner')
}

export function personalized() {
    return request.get('/personalized')
}

export function getPlaylistDetail(id) {
    return request.get('/playlist/detail?id=' + id)
}

export function getPlaylistHot() {
    return request.get('/playlist/hot')
}

export function getTopPlaylistHighquality(cat = '全部', limit = 30) {
    return request.get('/top/playlist/highquality?cat=' + cat + "&limit=" + limit)
}

export function like(id) {
    return request.get('/like?id=' + id)
}

export function toplist(idx) {
    return request.get('/top/list?idx=' + idx)
}

export function singerlist(cat,offset) {
    if(cat==0){
        return request.get('/top/artists?offset=0')
    }
    return request.get('/artist/list?cat=' + cat+'&offset='+offset)
}

export function getSongDetail(ids) {
    return request.get('/song/detail?ids=' + ids)
}

export function getMusicUrl(id, br = 999000) {
    return request.get('/music/url?id=' + id + '&br=' + br)
}

export function djlist(catid) {
    if(catid==0){
        return request.get('/dj/recommend')
    }else{
        return request.get('/dj/recommend/type?type='+catid)
    }

}
export function djcat() {
    return request.get('/dj/catelist')
}
