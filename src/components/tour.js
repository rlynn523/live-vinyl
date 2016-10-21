import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import actions from '../actions/tour';
import { MuiThemeProvider, Paper, RaisedButton, Chip } from 'material-ui';
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
            alert(data.artistTourDate.title + ' Saved!')
        )
    }
    render() {
        if(this.props.artistTourDates !== null && this.props.artistTourDates.tour.length === 0) {
            return(
                <MuiThemeProvider>
                    <Paper className='paper'>
                        <p className='tourTitle' style={{fontWeight: 'lighter'}}>Tour Dates</p>
                        <ul className='tourList'>
                            <p className='noTour'>No Tour Dates!</p>
                        </ul>
                    </Paper>
                </MuiThemeProvider>
            )
        } else if (this.props.artistTourDates !== null) {
            let artistTourDates = this.props.artistTourDates.tour.map(function(artistTourDate){
                return <li key={artistTourDate.id}>
                    {artistTourDate.title} <br></br> {artistTourDate.formatted_datetime}<br></br>
                <Chip style={{margin: '5px auto'}} backgroundColor={'#C8E6C9'}>{artistTourDate.ticket_type}: <a href={artistTourDate.ticket_url} target='_blank'>{artistTourDate.ticket_status}</a></Chip>
                <Chip style={{margin: '5px auto'}} backgroundColor={'#C8E6C9'}><a href={artistTourDate.facebook_rsvp_url} target='_blank'>RSVP</a></Chip>
                <RaisedButton className='tourButton' backgroundColor='#FF9800' labelColor='#FFFFFF' label='Save Tour Date' onClick={() => this.onClick({artistTourDate})} />
                </li>
            }, this);
            return(
                <MuiThemeProvider>
                    <Paper className='paper'>
                        <div>
                            <p className='tourTitle' style={{fontWeight: 'lighter'}}>Tour Dates</p>
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
