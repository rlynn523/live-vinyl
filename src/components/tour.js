import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import actions from '../actions/artist';

export class Tour extends Component {
    constructor() {
        super()
        this.onClick = this.onClick.bind(this);
    }
    onClick(data) {
        this.props.dispatch(
            actions.saveTour(data.artistTourDate),
            alert('Tour Date Saved!')
        )
    }
    render() {
        if(this.props.artistTourDates !== null) {
            let artistTourDates = this.props.artistTourDates.tour.map(function(artistTourDate){
                return <li key={artistTourDate.id}>
                    {artistTourDate.title} {artistTourDate.formatted_datetime}
                    {artistTourDate.ticket_type}: <a href={artistTourDate.ticket_url}>{artistTourDate.ticket_status}</a>
                <button type='submit' onClick={() => this.onClick({artistTourDate})}>Save</button>
                </li>
            }, this);
            return(
                <div className='musicList'>
                    <h2>Tour Dates</h2>
                    <ul>
                        {artistTourDates}
                    </ul>
                </div>
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
        artistTourDates: state.TourReducer.tour
    }
}
export default connect(mapStateToProps)(Tour);
