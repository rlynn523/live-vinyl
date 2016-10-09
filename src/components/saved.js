import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/saved';

export class Saved extends Component {
    componentDidMount() {
        console.log('PROPS', this.props)
        this.props.dispatch(
            actions.savedVinyl(this.props)
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
        savedVinyl: state.SavedVinylReducer
    }
}
export default connect(mapStateToProps)(Saved);
