import fetch from 'isomorphic-fetch';

let USER_SIGN_IN = 'USER_SIGN_IN';
let userSignIn = function(username, password) {
    return {
        type: USER_SIGN_IN,
        username: username,
        password: password
    }
}

let signIn = function(userName, userPassword, username, password) {
    return function(dispatch) {
        let url = '/login';
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: JSON.stringify({
                username: userName,
                password: userPassword
            }),
            contentType: 'application/json',
        }).done(function(data){
            window.location.href = '/#/search';
            if(data) {
                dispatch(
                    userSignIn(username, password)
                )
            }
        }).fail(function(err){
            alert('Wrong Log In!');
        });
    }
}
let USER_LOG_OUT = 'USER_LOG_OUT';
let userLogOut = function() {
    return {
        type: USER_LOG_OUT
    }
}

let logout = function() {
    return function(dispatch) {
        let url = '/logout';
        $.ajax({
            url: url,
            type: 'get',
        }).done(function(data){
            window.location.href = '/';
            dispatch(
                userLogOut()
            )
        })
    }
}

exports.USER_SIGN_IN = USER_SIGN_IN;
exports.signIn = signIn;
exports.USER_LOG_OUT = USER_LOG_OUT;
exports.logout = logout
