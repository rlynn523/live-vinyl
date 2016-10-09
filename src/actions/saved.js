import fetch from 'isomorphic-fetch';

let SAVE_TOUR_DATE = 'SAVE_TOUR_DATE';
let saveTourDate = function(tour) {
    return {
        type: SAVE_TOUR_DATE,
        tour: tour
    }
}

let saveTour = function(tour) {
    return function(dispatch) {
        let url = '/tours';
        return fetch(url, { method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: tour.title,
                date: tour.formatted_datetime,
                tickets: tour.ticket_url
            })
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
                    saveTourDate(tour)
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
               console.log('SAVED VINYL', data);
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
exports.GET_SAVED_VINYL = GET_SAVED_VINYL;
exports.savedVinyl = savedVinyl;
exports.SAVE_TOUR_DATE = SAVE_TOUR_DATE;
exports.saveTour = saveTour
