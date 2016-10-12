import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action1 from '../actions/saved';
import * as action2 from '../actions/delete';
import { MuiThemeProvider, RaisedButton, Paper, Chip } from 'material-ui';

export class SavedVinyl extends Component {
    constructor() {
        super()
        this.onClick = this.onClick.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(
            action1.savedVinyl()
        )
    }
    onClick(data) {
        this.props.dispatch(
            action2.deleteVinyl(data.savedVinyl),
            alert(data.savedVinyl.title + ' Removed From Collection!')
        )
        this.props.dispatch(
            action1.savedVinyl()
        )
    }
    render() {
        if(this.props.savedVinyls !== null){
            let savedVinyls = this.props.savedVinyls.vinyl.map(function(savedVinyl){
                return <li key={savedVinyl._id}><Chip style={{margin: '5px auto'}} backgroundColor={'#C8E6C9'}>{savedVinyl.title} {savedVinyl.country} {savedVinyl.year}</Chip>
                <RaisedButton className='deleteButton' backgroundColor='#FF9800' labelColor='#FFFFFF' label='Delete Vinyl' onClick={() => this.onClick({savedVinyl})} />
                </li>
            },this);
            return(
                <MuiThemeProvider>
                    <Paper className='paperSaved'>
                        <div>
                            <p className='savedVinylTitle' style={{fontWeight: 'lighter'}}>Records In Your Collection</p>
                            <ul className='savedVinylList'>
                                {savedVinyls}
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
        savedVinyls: state.SavedDataReducer.savedVinyl
    }
}
export default connect(mapStateToProps)(SavedVinyl);
