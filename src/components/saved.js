import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/artist';

export class Saved extends Component {
    componentDidMount() {
        this.props.dispatch(
            actions.savedVinyl()
        )
    }
    render() {
        return(
            <p>saved</p>
        )
    }
}
let mapStateToProps = function(state, props) {
    return {
        vinylRecords: state.ArtistReducer.vinyl,
        music: state.MusicReducer.music
    }
}
export default connect(mapStateToProps)(Saved);
