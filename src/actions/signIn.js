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
        let url = 'http://localhost:8080/login';
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: JSON.stringify({
                username: userName,
                password: userPassword
            }),
            contentType: 'application/json',
        }).done(function(data) {
            localStorage.username = username;
            window.location.href = 'localhost:8080/search';
            if(data) {
                dispatch(
                    userSignIn(username, password)
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

exports.USER_SIGN_IN = USER_SIGN_IN;
exports.signIn = signIn;
