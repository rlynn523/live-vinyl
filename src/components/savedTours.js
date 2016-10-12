import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action1 from '../actions/saved';
import * as action2 from '../actions/delete';
import { MuiThemeProvider, RaisedButton, Paper, Chip } from 'material-ui';

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
            alert(data.savedTour.title + ' Removed!')
        )
        this.props.dispatch(
            action1.savedTours()
        )
    }
    render() {
        if(this.props.savedTours !== null){
            let savedTours = this.props.savedTours.tour.map(function(savedTour){
                    return <li key={savedTour._id}><Chip style={{margin: '5px auto'}} backgroundColor={'#C8E6C9'}>{savedTour.title}</Chip>
                    <RaisedButton className='deleteButton' label='Delete Tour Date' backgroundColor='#FF9800' labelColor='#FFFFFF' onClick={() => this.onClick({savedTour})} />
                </li>
            },this);
            return(
                <MuiThemeProvider>
                    <Paper className='paperSaved'>
                        <div>
                            <p className='savedToursTitle' style={{fontWeight: 'lighter'}}>Saved Tour Dates</p>
                            <ul className='savedToursList'>
                                {savedTours}
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
        savedTours: state.SavedDataReducer.savedTours
    }
}
export default connect(mapStateToProps)(SavedTours);
