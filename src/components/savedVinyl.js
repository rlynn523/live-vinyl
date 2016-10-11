import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action1 from '../actions/saved';
import * as action2 from '../actions/delete';
import { MuiThemeProvider, RaisedButton } from 'material-ui';

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
            alert('Vinyl Removed From Collections!')
        )
    }
    render() {
        if(this.props.savedVinyls !== null){
            let savedVinyls = this.props.savedVinyls.vinyl.map(function(savedVinyl){
                return <li key={savedVinyl._id}>{savedVinyl.title}<br></br>{savedVinyl.country}<br></br>{savedVinyl.year}<RaisedButton type='submit' label='Delete Vinyl' primary={true} onClick={() => this.onClick({savedVinyl})} /></li>
            },this);
            return(
                <MuiThemeProvider>
                    <div>
                        <h2>Records In Your Collection</h2>
                        <ul>
                            {savedVinyls}
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
        savedVinyls: state.SavedDataReducer.savedVinyl
    }
}
export default connect(mapStateToProps)(SavedVinyl);
