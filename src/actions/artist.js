let FETCH_ARTIST_ALBUMS = 'FETCH_ARTIST_ALBUMS';
let fetchArtistAlbums = function(vinyl) {
    return {
        type: FETCH_ARTIST_ALBUMS,
        vinyl: vinyl
    }
}
let fetchAlbums = function(userSearch, vinyl) {
    return function(dispatch) {
        let url = 'https://api.discogs.com/database/search?q='+userSearch+'&format=Vinyl,album,LP&key=yWkjlILruJQTksamjYun&secret=THKNSeHdZeMCnPmMLkFfEdHJUTGDenPH';
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'jsonp',
            contentType: 'application/json',
        }).done(function(data) {
            if(data) {
                let vinyl = data;
                dispatch(
                    fetchArtistAlbums(vinyl)
                )
            }
        })
    .error(function(error) {
        return dispatch(
            console.log(error)
        )
    })
    }
}
let FETCH_ARTIST_MUSIC = 'FETCH_ARTIST_MUSIC';
let fetchArtistMusic = function(music) {
    return {
        type: FETCH_ARTIST_MUSIC,
        music: music
    }
}
let fetchMusic = function(userSearch, music) {
    return function(dispatch) {
        let url = 'https://api.spotify.com/v1/search?q='+userSearch+'&type=artist';
        $.ajax({
            url: url,
            type: 'get',
        }).done(function(data) {
            if(data) {
                let artistId = data.artists.items[0].id;
                $.ajax({
                    url: 'https://api.spotify.com/v1/artists/'+artistId+'/albums?album_type=album',
                    type: 'get',
                }).done(function(data) {
                    if(data) {
                        console.log(data.items);
                        let music = data;
                        dispatch(
                            fetchArtistMusic(music)
                        )
                    }
                })
            }
        })
    .error(function(error) {
        return dispatch(
            console.log(error)
        )
    })
    }
}
exports.FETCH_ARTIST_MUSIC = FETCH_ARTIST_MUSIC;
exports.fetchMusic = fetchMusic;
exports.FETCH_ARTIST_ALBUMS = FETCH_ARTIST_ALBUMS;
exports.fetchAlbums = fetchAlbums;
