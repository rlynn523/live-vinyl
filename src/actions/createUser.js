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
        let url = '/users';
        return fetch(url, { method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
            body: JSON.stringify({
                username: newUser,
                password: newUserPassword
            })
        }).then(function(data) {
            if(data) {
                console.log('NEW USER', username, password);
                dispatch(
                    createNewUser(username, password)
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

exports.CREATE_NEW_USER = CREATE_NEW_USER;
exports.createUser = createUser;
