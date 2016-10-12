import React, { Component } from 'react';
import { Link } from 'react-router';
import { MuiThemeProvider, Chip, RaisedButton } from 'material-ui';
import actions from '../actions/signIn';

export default class Landing extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <div className='landingMain'>
                    <p className='titleMain' style={{fontWeight: 'lighter'}}>Welcome To Live Vinyl</p>
                    <p className='titleSecond'>Search An Artist You Love</p>
                    <div className='landingChips'>
                        <Chip style={{margin: '5px auto'}} backgroundColor={'#C8E6C9'}>Get Current Tour Dates & Save Tour Dates To Your Profile</Chip>
                        <Chip style={{margin: '5px auto'}} backgroundColor={'#C8E6C9'}>Get Available Albums On Spotify</Chip>
                        <Chip style={{margin: '5px auto'}} backgroundColor={'#C8E6C9'}>Get Vinyl Releases From Artist & Add Them To Your Collection</Chip>
                        <Chip style={{margin: '5px auto'}} backgroundColor={'#C8E6C9'}>Get Related Artists</Chip>
                    </div>
                    <div className='landingButtons'>
                        <Link to={'/sign-in'}><RaisedButton className='signInButton' backgroundColor='#FF9800' labelColor='#FFFFFF' label='Sign In' /></Link>
                        <Link to={'/create-user'}><RaisedButton className='signUpButton' backgroundColor='#FF9800' labelColor='#FFFFFF' label='Create User' /></Link>
                        <Link to={'/search'}><RaisedButton className='searchButtonLanding' backgroundColor='#FF9800' labelColor='#FFFFFF' label='Search' /></Link>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
