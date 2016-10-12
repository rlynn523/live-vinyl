import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { MuiThemeProvider, AppBar, IconButton } from 'material-ui';
import actions from '../actions/signIn';
import Home from 'material-ui/svg-icons/action/home';
import LogOut from 'material-ui/svg-icons/action/exit-to-app';
import Search from 'material-ui/svg-icons/action/search';
import Person from 'material-ui/svg-icons/social/person';

export class NavBar extends Component {
    constructor(props) {
        super(props)
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        this.props.dispatch(
            actions.logout()
        )
    }
    render() {
        return(
            <MuiThemeProvider>
                <AppBar className='appBar' title='Live Vinyl' zDepth={2} showMenuIconButton={false} style={{backgroundColor: '#388E3C'}}
                    iconElementRight={
                        <div>
                            <Link to={'/'}><IconButton><Home color='white' hoverColor='#8BC34A'/></IconButton></Link>
                            <Link to={'/search'}><IconButton><Search color='white' hoverColor='#8BC34A'/></IconButton></Link>
                            <Link to={'/saved'}><IconButton><Person color='white' hoverColor='#8BC34A'/></IconButton></Link>
                            <IconButton onClick={this.logOut}><LogOut color='white' hoverColor='#8BC34A'/></IconButton>
                        </div>
                    }>
                </AppBar>
            </MuiThemeProvider>
        )
    }
}
let mapStateToProps = function(state, props) {
    return {
    }
}
export default connect(mapStateToProps)(NavBar);
