import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import actions from '../actions/tour';
import { MuiThemeProvider, Paper, RaisedButton } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
        if(this.props.artistTourDates !== null && this.props.artistTourDates.tour.length === 0) {
            return(
                <p>No Dates</p>
            )
        } else if (this.props.artistTourDates !== null) {
            let artistTourDates = this.props.artistTourDates.tour.map(function(artistTourDate){
                return <li key={artistTourDate.id}>
                    {artistTourDate.title} <br></br> {artistTourDate.formatted_datetime} <br></br> {artistTourDate.ticket_type}: <a href={artistTourDate.ticket_url}>{artistTourDate.ticket_status}</a><br></br><RaisedButton className='tourButton' type='submit' label='Save Tour Date' primary={true} onClick={() => this.onClick({artistTourDate})} />
                </li>
            }, this);
            return(
                <MuiThemeProvider>
                    <Paper className='paper'>
                        <div>
                            <p className='tourTitle'>Tour Dates</p>
                            <ul className='tourList'>
                                {artistTourDates}
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
        artistTourDates: state.TourReducer.tour
    }
}
export default connect(mapStateToProps)(Tour);
