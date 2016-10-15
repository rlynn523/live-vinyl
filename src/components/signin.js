import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/signIn'
import { MuiThemeProvider, RaisedButton } from 'material-ui';

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
            <MuiThemeProvider>
                <div className='signIn'>
                    <p className='titleSignIn' style={{fontWeight: 'lighter'}}>Sign In</p>
                    <input type='text' ref='userName' placeholder='Username'/>
                    <input type='password' ref='userPassword' placeholder='Password'/>
                    <RaisedButton className='signInButton' onClick={this.onClick} backgroundColor='#FF9800' labelColor='#FFFFFF' label='Sign In' />
                </div>
            </MuiThemeProvider>
        )
    }
}
let mapStateToProps = function(state, props) {
    return {
        userName: state.SignInReducer
    }
}
export default connect(mapStateToProps)(SignIn);
