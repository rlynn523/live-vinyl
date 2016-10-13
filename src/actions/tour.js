import fetch from 'isomorphic-fetch';

let FETCH_TOUR_DATES = 'FETCH_TOUR_DATES';
let fetchTourDates = function(tour) {
    return {
        type: FETCH_TOUR_DATES,
        tour: tour
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

let SAVE_TOUR_DATE = 'SAVE_TOUR_DATE';
let saveTourDate = function(tour) {
    return {
        type: SAVE_TOUR_DATE,
        tour: tour
    }
}

let saveTour = function(tour) {
    return function(dispatch) {
        let url = 'https://murmuring-scrubland-56766.herokuapp.com/tours';
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: JSON.stringify({
                title: tour.title,
                date: tour.formatted_datetime,
                tickets: tour.ticket_url
            }),
            contentType: 'application/json',
        }).done(function(data) {
           let tour = data;
            if(data) {
                dispatch(
                    saveTourDate(tour)
                )
            }
        }).fail(function(error) {
            return dispatch(
                console.log(error)
            )
        })
    }
}

exports.FETCH_TOUR_DATES = FETCH_TOUR_DATES;
exports.fetchTour = fetchTour;
exports.SAVE_TOUR_DATE = SAVE_TOUR_DATE;
exports.saveTour = saveTour
