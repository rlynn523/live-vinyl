import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/createUser'
import { browserHistory } from 'react-router'

export class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.dispatch(
            actions.createUser(this.refs.newUser.value, this.refs.newUserPassword.value)
        )
        browserHistory.push('#/search');
    }
    render() {
        return(
            <div>
                <form id='createUser-form'>
                    <input type='text' ref='newUser' placeholder='Username'/>
                    <input type='password' ref='newUserPassword' placeholder='Password'/>
                    <button type='submit' onClick={this.onClick}>Submit</button>
                </form>
            </div>
        )
    }
}
let mapStateToProps = function(state, props) {
    return {
        newUser: state.CreateUserReducer.username,
        newUserPassword: state.CreateUserReducer.password
    }
}
export default connect(mapStateToProps)(CreateUser);
