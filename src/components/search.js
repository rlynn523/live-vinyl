import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action1 from '../actions/artist';
import * as action2 from '../actions/vinyl';
import * as action3 from '../actions/tour';

export class Search extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.dispatch(
            action1.fetchMusic(this.refs.userSearch.value)
        )
        this.props.dispatch(
            action2.fetchVinyl(this.refs.userSearch.value)
        )
        this.props.dispatch(
            action3.fetchTour(this.refs.userSearch.value)
        )
    }
    render() {
        return(
            <div className='bandSearch'>
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
        vinylRecords: state.VinylReducer.vinyl,
        music: state.MusicReducer.music
    }
}
export default connect(mapStateToProps)(Search);
