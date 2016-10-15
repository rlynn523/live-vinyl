import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import actions from '../actions/vinyl';
import { MuiThemeProvider, Paper, RaisedButton, Chip } from 'material-ui';

export class Vinyl extends Component {
    constructor() {
        super()
        this.onClick = this.onClick.bind(this);
    }
    onClick(data) {
        this.props.dispatch(
            actions.saveVinyl(data.vinylRecord),
            alert(data.vinylRecord.title + ' Saved To Collection!')
        )
    }
    render() {
        if(this.props.vinylRecords !== null) {
            let vinylRecords = this.props.vinylRecords.map(function(vinylRecord) {
                return <li key={vinylRecord.id}>
                    <a href={'https://www.discogs.com/' + vinylRecord.uri} target='_blank'><img src={vinylRecord.thumb} /></a>
                    <Chip style={{margin: '8px auto'}} backgroundColor={'#C8E6C9'}><a href={'https://www.discogs.com/' + vinylRecord.uri} target='_blank'>{vinylRecord.title}<br></br>{vinylRecord.country} {vinylRecord.year} {vinylRecord.format[0]}</a></Chip>
                    <RaisedButton backgroundColor='#FF9800' labelColor='#FFFFFF' label='Save Vinyl' onClick={() => this.onClick({vinylRecord})} />
                </li>
            }, this);
            return(
                <MuiThemeProvider>
                    <Paper className='paper'>
                        <div>
                            <p className='vinylTitle' style={{fontWeight: 'lighter'}}>Artist Vinyl Releases</p>
                            <ul className='vinylList'>
                                {vinylRecords}
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
        vinylRecords: state.VinylReducer.vinyl,
     }
}
export default connect(mapStateToProps)(Vinyl);
