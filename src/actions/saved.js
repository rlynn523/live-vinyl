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
        let url = 'https://murmuring-scrubland-56766.herokuapp.com/vinyl';
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
        }).done(function(data) {
           let tour = data;
            if(data) {
            let vinyl = data;
                dispatch(
                    getSavedVinyl(vinyl)
                )
            }
        }).fail(function(error) {
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
        let url = 'https://murmuring-scrubland-56766.herokuapp.com/tours';
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
        }).done(function(data) {
           let tour = data;
            if(data) {
            let tours = data;
                dispatch(
                    getSavedTours(tours)
                )
            }
        }).fail(function(error) {
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
