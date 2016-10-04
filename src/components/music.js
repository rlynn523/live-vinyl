import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/artist';

export class Music extends Component {
    render() {
        if(this.props.artistAlbums !== null){
            let artistAlbums = this.props.artistAlbums.music.items.map(function(artistAlbum){
                return <li key={artistAlbum.id}><a href={artistAlbum.external_urls.spotify} target='_blank'><img src={artistAlbum.images[2].url} /></a>
                {artistAlbum.name}</li>
            });
            return(
                <div>
                    <ul>
                        {artistAlbums}
                    </ul>
                </div>
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
