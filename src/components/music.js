import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/artist';
import { MuiThemeProvider, Paper } from 'material-ui';

export class Music extends Component {
    render() {
        if(this.props.artistAlbums !== null){
            let artistAlbums = this.props.artistAlbums.music.items.map(function(artistAlbum){
                return <li key={artistAlbum.id}><a href={artistAlbum.external_urls.spotify} target='_blank'><img src={artistAlbum.images[1].url} /></a>
                    <br></br>
                    <p>{artistAlbum.name}</p>
                </li>
            });
            return(
                <MuiThemeProvider>
                    <Paper className='paper'>
                        <div>
                            <p className='musicTitle'>Artist Albums</p>
                            <ul className='albumList'>
                                {artistAlbums}
                            </ul>
                        </div>
                    </Paper>
                </MuiThemeProvider>
            );
        } else {
            return (
                <p>Start Your Search!</p>
            );
        }
    }
}
let mapStateToProps = function(state, props) {
    return {
        artistAlbums: state.MusicReducer.music,
    }
}
export default connect(mapStateToProps)(Music);
