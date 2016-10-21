import React, { Component } from 'react';
import { Link } from 'react-router';
import { MuiThemeProvider, Chip, RaisedButton, FontIcon } from 'material-ui';
import Album from 'material-ui/svg-icons/av/album'
import actions from '../actions/signIn';

export default class Landing extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <div className='landingMain'>
                    <p className='titleMain' style={{fontWeight: 'lighter'}}>Welcome To Live Vinyl</p>
                        <FontIcon className='vinylIcon'><Album style={{width: '150px', height: '150px'}}/></FontIcon>
                    <div className='landingButtons'>
                        <Link to={'/sign-in'}><RaisedButton className='signInButton' backgroundColor='#FF9800' labelColor='#FFFFFF' label='Sign In' /></Link>
                        <Link to={'/create-user'}><RaisedButton className='signUpButton' backgroundColor='#FF9800' labelColor='#FFFFFF' label='Create User' /></Link>
                        <Link to={'/search'}><RaisedButton className='searchButtonLanding' backgroundColor='#FF9800' labelColor='#FFFFFF' label='Search' /></Link>
                    </div>
                    <div className='landingAbout'>
                        <p style={{fontWeight: 'lighter'}}>Get Related Artists || Get Current Tour Dates</p>
                        <p style={{fontWeight: 'lighter'}}>Get Vinyl Releases From Artist || Get Available Albums</p>
                        <p style={{fontWeight: 'lighter'}}>Save Tours & Vinyl To Your Profile</p>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
