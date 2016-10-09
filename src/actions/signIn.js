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
        return fetch(url, { method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             username: userName,
             password: userPassword
          })
      }).then(function(data) {
            console.log('AUTH', data);
            console.log('USERNAME', username);
            console.log('LOCALSTORAGE', localStorage.username);
            localStorage.username = username;
            window.location.href = '#/search';
            if(data) {
                dispatch(
                    userSignIn(username, password)
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

exports.USER_SIGN_IN = USER_SIGN_IN;
exports.signIn = signIn;
