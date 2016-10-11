import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action1 from '../actions/saved';
import * as action2 from '../actions/delete';
import { MuiThemeProvider, RaisedButton } from 'material-ui';

export class SavedTours extends Component {
    constructor() {
        super()
        this.onClick = this.onClick.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(
            action1.savedTours()
        )
    }
    onClick(data) {
        this.props.dispatch(
            action2.deleteTour(data.savedTour),
            alert('Tour Date Removed!')
        )
    }
    render() {
        if(this.props.savedTours !== null){
            let savedTours = this.props.savedTours.tour.map(function(savedTour){
                return <li key={savedTour._id}>{savedTour.title}<RaisedButton type='submit' label='Delete Tour Date' primary={true} onClick={() => this.onClick({savedTour})} /></li>
            },this);
            return(
                <MuiThemeProvider>
                    <div>
                        <h2>Saved Tour Dates</h2>
                        <ul>
                            {savedTours}
                        </ul>
                    </div>
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
        savedTours: state.SavedDataReducer.savedTours
    }
}
export default connect(mapStateToProps)(SavedTours);
