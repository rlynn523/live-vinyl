import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action1 from '../actions/artist';
import * as action2 from '../actions/vinyl';
import * as action3 from '../actions/tour';
import { MuiThemeProvider, RaisedButton } from 'material-ui';

export class Search extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        if(this.refs.userSearch.value !== '') {
            this.props.dispatch(
                action1.fetchMusic(this.refs.userSearch.value)
            )
            this.props.dispatch(
                action2.fetchVinyl(this.refs.userSearch.value)
            )
            this.props.dispatch(
                action3.fetchTour(this.refs.userSearch.value)
            )
            this.refs.userSearch.value = '';
        } else {
            alert('Enter An Artist!')
        }
    }
    render() {
        return(
            <MuiThemeProvider>
                <div className='bandSearch'>
                    <p className='searchTitle' style={{fontWeight: 'lighter'}}>Search An Artist</p>
                    <input type='text' ref='userSearch' placeholder=' ex: Radiohead' />
                    <RaisedButton className='searchButton' backgroundColor='#FF9800' onClick={this.onClick} label='Search Artist' labelColor='#FFFFFF'/>
                </div>
            </MuiThemeProvider>
        );
    }
}
let mapStateToProps = function(state, props) {
    return {
        vinylRecords: state.VinylReducer.vinyl,
        music: state.ArtistReducer.music,
        tour: state.TourReducer.tour
    }
}
export default connect(mapStateToProps)(Search);
