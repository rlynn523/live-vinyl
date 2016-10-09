import fetch from 'isomorphic-fetch';

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
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
           }
           return response.json();
       }).then(function(data) {
            if(data) {
                let artistId = data.artists.items[0].id;
                dispatch(
                    fetchRelated(artistId)
                );
                url = 'https://api.spotify.com/v1/artists/'+artistId+'/albums?album_type=album&market=US';
                return fetch(url).then(function(response) {
                    if (response.status < 200 || response.status >= 300) {
                       var error = new Error(response.statusText)
                       error.response = response
                       throw error;
                   }
                   return response.json();
               }).then(function(data) {
                    if(data) {
                        let music = data;
                        dispatch(
                            fetchArtistMusic(music)
                        )
                    }
                })
            }
        })
        .catch(function(error) {
            return dispatch(
                console.log(error)
            )
        })
    }
}

let FETCH_RELATED_ARTISTS = 'FETCH_RELATED_ARTISTS';
let fetchRelatedArtists = function(related) {
    return {
        type: FETCH_RELATED_ARTISTS,
        related: related
    }
}
let fetchRelated = function(artistId, related) {
    return function(dispatch) {
        let url = 'https://api.spotify.com/v1/artists/'+artistId+'/related-artists';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
           }
               return response.json();
           }).then(function(data) {
               let related = data;
            if(data) {
                dispatch(
                    fetchRelatedArtists(related)
                )
            }
        })
        .catch(function(error) {
            return dispatch(
                console.log(error)
            )
        })
    }
}

exports.FETCH_ARTIST_MUSIC = FETCH_ARTIST_MUSIC;
exports.fetchMusic = fetchMusic;
exports.FETCH_RELATED_ARTISTS = FETCH_RELATED_ARTISTS;
exports.fetchRelated = fetchRelated;
