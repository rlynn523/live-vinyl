import fetch from 'isomorphic-fetch';

let DELETE_USER_VINYL = 'DELETE_USER_VINYL';
let deleteUserVinyl = function(vinyl) {
    return {
        type: DELETE_USER_VINYL,
        vinyl: vinyl
    }
}
let deleteVinyl = function(vinyl) {
    return function(dispatch) {
        let url = '/vinyl/' + vinyl._id;
        return fetch(url, { method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
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
                    deleteUserVinyl(vinyl)
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

let DELETE_USER_TOUR = 'DELETE_USER_TOUR';
let deleteUserTour = function(tour) {
    return {
        type: DELETE_USER_TOUR,
        tour: tour
    }
}
let deleteTour = function(tour) {
    return function(dispatch) {
        let url = '/tours/' + tour._id;
        return fetch(url, { method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            }).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
           }
           return response.json();
       }).then(function(data) {
           let tour = data;
            if(data) {
                dispatch(
                    deleteUserTour(tour)
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

exports.DELETE_USER_VINYL = DELETE_USER_VINYL;
exports.deleteVinyl = deleteVinyl;
exports.DELETE_USER_TOUR = DELETE_USER_TOUR;
exports.deleteTour = deleteTour
