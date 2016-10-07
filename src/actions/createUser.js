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
        let url = 'http://localhost:8080/users';
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: JSON.stringify({
                username: newUser,
                password: newUserPassword
            }),
            contentType: 'application/json',
        }).done(function(data) {
            if(data) {
                console.log(password);
                dispatch(
                    createNewUser(username, password)
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

exports.CREATE_NEW_USER = CREATE_NEW_USER;
exports.createUser = createUser;
