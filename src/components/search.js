import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/artist';

export class Search extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.dispatch(
            actions.fetchMusic(this.refs.userSearch.value)
        )
        this.props.dispatch(
            actions.fetchAlbums(this.refs.userSearch.value)
        )
    }
    render() {
        return(
            <div>
                <form>
                    <input type='text' ref='userSearch'/>
                    <button type='button' onClick={this.onClick}>Search</button>
                </form>
            </div>
        );
    }
}
let mapStateToProps = function(state, props) {
    return {
        vinylRecords: state.ArtistReducer.vinyl,
        music: state.MusicReducer.music
    }
}
export default connect(mapStateToProps)(Search);
