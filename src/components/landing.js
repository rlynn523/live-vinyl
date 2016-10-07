import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Landing extends Component {
    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <Link to={'/sign-in'}><h2>Sign In</h2></Link>
                <Link to={'/search'}><h2>Search</h2></Link>
                <Link to={'/create-user'}><h2>Create User</h2></Link>
            </div>
        )
    }
}
