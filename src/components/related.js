import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/artist';
import { MuiThemeProvider, Paper } from 'material-ui';

export class Related extends Component {
    render() {
        if(this.props.relatedArtists !== null) {
            let relatedArtists = this.props.relatedArtists.artists.map(function(relatedArtist){
                return <li key={relatedArtist.id}>{relatedArtist.name}</li>
            });
            return(
                <MuiThemeProvider>
                    <Paper className='paper'>
                        <div>
                            <h2>Related Artists</h2>
                            <ul>
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
        relatedArtists: state.MusicReducer.related,
    }
}
export default connect(mapStateToProps)(Related);
