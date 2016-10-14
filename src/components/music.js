import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/artist';
import { MuiThemeProvider, Paper, Chip } from 'material-ui';

export class Music extends Component {
    render() {
        if(this.props.artistAlbums !== null) {
            let artistAlbums = this.props.artistAlbums.music.items.map(function(artistAlbum) {
                return <li key={artistAlbum.id}><a href={artistAlbum.external_urls.spotify} target='_blank'><img src={artistAlbum.images[1].url} /></a>
                    <br></br>
                    <Chip className='albumChip' backgroundColor={'#C8E6C9'} style={{margin: '8px auto'}}><a href={artistAlbum.external_urls.spotify} target='_blank'>{artistAlbum.name}</a></Chip>
                </li>
            });
            return(
                <MuiThemeProvider>
                    <Paper className='paper'>
                        <div>
                            <Paper>
                                <p className='musicTitle' style={{fontWeight: 'lighter'}}>Artist Albums</p>
                            </Paper>
                            <ul className='albumList'>
                                {artistAlbums}
                            </ul>
                        </div>
                    </Paper>
                </MuiThemeProvider>
            );
        } else {
            return (
                <p></p>
            );
        }
    }
}
let mapStateToProps = function(state, props) {
    return {
        artistAlbums: state.ArtistReducer.music,
    }
}
export default connect(mapStateToProps)(Music);
