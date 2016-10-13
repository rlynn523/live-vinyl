import fetch from 'isomorphic-fetch';

let CREATE_NEW_USER = 'CREATE_NEW_USER';

let createNewUser = function(username, password) {
    return {
        type: CREATE_NEW_USER,
        username: username,
        password: password
    }
}
let createUser = function(newUser, newUserPassword, username, password) {
    return function(dispatch) {
        let url = 'https://murmuring-scrubland-56766.herokuapp.com/users';
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: JSON.stringify({
                username: newUser,
                password: newUserPassword
            }),
            contentType: 'application/json',
        }).done(function(data){
            window.location.href = 'https://murmuring-scrubland-56766.herokuapp.com/#/sign-in';
            if(data) {
                dispatch(
                    createNewUser(username, password)
                )
            }
        }).fail(function(err){
            console.log(err);
        });
    }
}

exports.CREATE_NEW_USER = CREATE_NEW_USER;
exports.createUser = createUser;
