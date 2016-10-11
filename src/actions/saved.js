import fetch from 'isomorphic-fetch';

let GET_SAVED_VINYL = 'GET_SAVED_VINYL';
let getSavedVinyl = function(vinyl) {
    return {
        type: GET_SAVED_VINYL,
        vinyl: vinyl
    }
}
let savedVinyl = function(vinyl) {
    return function(dispatch) {
        let url = '/vinyl';
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
                    getSavedVinyl(vinyl)
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

let GET_SAVED_TOURS = 'GET_SAVED_TOURS';
let getSavedTours = function(tour) {
    return {
        type: GET_SAVED_TOURS,
        tour: tour
    }
}
let savedTours = function(tour) {
    return function(dispatch) {
        let url = '/tours';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
               }
               return response.json();
           }).then(function(data) {
            if(data) {
            let tours = data;
                dispatch(
                    getSavedTours(tours)
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

exports.GET_SAVED_VINYL = GET_SAVED_VINYL;
exports.savedVinyl = savedVinyl;
exports.GET_SAVED_TOURS = GET_SAVED_TOURS;
exports.savedTours = savedTours;
