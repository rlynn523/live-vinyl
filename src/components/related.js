import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/artist';
import { MuiThemeProvider, Paper, Chip } from 'material-ui';

export class Related extends Component {
    render() {
        if(this.props.relatedArtists !== null) {
            let relatedArtists = this.props.relatedArtists.artists.map(function(relatedArtist){
                return <li key={relatedArtist.id}><Chip style={{margin: '5px auto'}} backgroundColor={'#C8E6C9'}>{relatedArtist.name}</Chip></li>
            });
            return(
                <MuiThemeProvider>
                    <Paper className='paper'>
                        <div>
                            <p className='relatedTitle' style={{fontWeight: 'lighter'}}>Related Artists</p>
                            <ul className='relatedList'>
                                {relatedArtists}
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
        relatedArtists: state.ArtistReducer.related,
    }
}
export default connect(mapStateToProps)(Related);
