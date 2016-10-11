import fetch from 'isomorphic-fetch';

let FETCH_ARTIST_VINYL = 'FETCH_ARTIST_VINYL';
let fetchArtistVinyl= function(vinyl) {
    return {
        type: FETCH_ARTIST_VINYL,
        vinyl: vinyl
    }
}
let fetchVinyl = function(userSearch, vinyl) {
    return function(dispatch) {
        // var headers = new Headers();
        // headers.append('User-Agent', 'VinylCollection/2.0');
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
                    fetchArtistVinyl(vinyl)
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
let SAVE_ARTIST_VINYL = 'SAVE_ARTIST_VINYL';
let saveArtistVinyl = function(vinyl) {
    return {
        type: SAVE_ARTIST_VINYL,
        vinyl: vinyl
    }
}

let saveVinyl = function(vinyl) {
    return function(dispatch) {
        let url = '/vinyl';
        return fetch(url, { method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
            body: JSON.stringify({
                title: vinyl.title,
                country: vinyl.country,
                year: vinyl.year
            })
            }).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
           }
           return response.json();
       }).then(function(data) {
           let vinyl = data;
            if(data) {
                dispatch(
                    saveArtistVinyl(vinyl)
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

exports.SAVE_ARTIST_VINYL = SAVE_ARTIST_VINYL;
exports.saveVinyl = saveVinyl;
exports.FETCH_ARTIST_VINYL = FETCH_ARTIST_VINYL;
exports.fetchVinyl = fetchVinyl;
