import fetch from 'isomorphic-fetch';

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
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
               }
               return response.json();
           }).then(function(data) {
            if(data) {
            let vinyl = data;
                dispatch(
                    fetchArtistAlbums(vinyl)
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
                fetchRelated(artistId);
                url = 'https://api.spotify.com/v1/artists/'+artistId+'/albums?album_type=album';
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

let FETCH_TOUR_DATES = 'FETCH_TOUR_DATES';
let fetchTourDates = function(tour) {
    return {
        type: FETCH_TOUR_DATES,
        tour
    }
}
let fetchTour = function(userSearch, tour) {
    return function(dispatch) {
        let url = 'http://api.bandsintown.com/artists/'+userSearch+'/events.json?api_version=2.0&app_id=VINYL_COLLECTION';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
           }
           return response.json();
       }).then(function(data) {
           console.log('DATA', data);
            if(data) {
                let tour = data;
                dispatch(
                    fetchTourDates(tour)
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
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'jsonp',
            contentType: 'application/json',
        }).done(function(data) {
            if(data) {
                console.log(data);
                dispatch(
                    fetchRelatedArtists(related)
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

let SAVE_TOUR_DATE = 'SAVE_TOUR_DATE';
let saveTourDate = function(tour) {
    return {
        type: SAVE_TOUR_DATE,
        tour: tour
    }
}

let saveTour = function(tour) {
    return function(dispatch) {
        console.log('TOUR', tour);
        let url = 'http://localhost:8080/tours';
        return fetch(url, {headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'post'}).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
           }
           return response.json();
       }).then(function(data) {
           console.log('SAVE TOUR', data);
           let tour = data;
            if(data) {
                dispatch(
                    saveTourDate(tour)
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

exports.SAVE_TOUR_DATE = SAVE_TOUR_DATE;
exports.saveTour = saveTour
exports.FETCH_ARTIST_MUSIC = FETCH_ARTIST_MUSIC;
exports.fetchMusic = fetchMusic;
exports.FETCH_ARTIST_ALBUMS = FETCH_ARTIST_ALBUMS;
exports.fetchAlbums = fetchAlbums;
exports.FETCH_TOUR_DATES = FETCH_TOUR_DATES;
exports.fetchTour = fetchTour;
exports.FETCH_RELATED_ARTISTS = FETCH_RELATED_ARTISTS;
exports.fetchRelated = fetchRelated;
