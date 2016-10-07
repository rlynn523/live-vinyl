import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/signIn'
import { browserHistory } from 'react-router'

export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.dispatch(
            actions.signIn(this.refs.userName.value, this.refs.userPassword.value)
        )
    }
    render() {
        return(
            <div>
                <form id='signIn-form'>
                    <input type='text' ref='userName' placeholder='Username'/>
                    <input type='password' ref='userPassword' placeholder='Password'/>
                    <button type='submit' onClick={this.onClick}>Log In</button>
                </form>
            </div>
        )
    }
}
let mapStateToProps = function(state, props) {
    return {
        userName: state.SignInReducer
    }
}
export default connect(mapStateToProps)(SignIn);
