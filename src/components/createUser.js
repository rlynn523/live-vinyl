import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/createUser';
import { MuiThemeProvider, RaisedButton } from 'material-ui';

export class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.dispatch(
            actions.createUser(this.refs.newUser.value, this.refs.newUserPassword.value)
        )
    }
    render() {
        return(
            <MuiThemeProvider>
                <div className='createUser'>
                    <p className='titleCreateUser' style={{fontWeight: 'lighter'}}>Create Log In</p>
                    <input type='text' ref='newUser' placeholder='Username'/>
                    <input type='password' ref='newUserPassword' placeholder='Password'/>
                    <RaisedButton className='signInButton' onClick={this.onClick} backgroundColor='#FF9800' labelColor='#FFFFFF' label='Create' />
                </div>
            </MuiThemeProvider>
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
