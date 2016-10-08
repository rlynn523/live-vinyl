import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import actions from '../actions/artist';

export class Vinyl extends Component {
    constructor() {
        super()
        this.onClick = this.onClick.bind(this);
    }
    onClick(data) {
        this.props.dispatch(
            actions.saveVinyl(data.vinylRecord),
            alert('Vinyl Saved To Collection!')
        )
    }
    render() {
        if(this.props.vinylRecords !== null) {
            let vinylRecords = this.props.vinylRecords.map(function(vinylRecord) {
                return <li key={vinylRecord.id}>
                    <a href={'https://www.discogs.com/' + vinylRecord.uri} target='_blank'><img src={vinylRecord.thumb} /></a>
                    {vinylRecord.title} {vinylRecord.country} {vinylRecord.year} {vinylRecord.format[0]}
                    <button type='submit' onClick={() => this.onClick({vinylRecord})}>Save</button>
                </li>
            }, this);
            return(
                <div className='vinylList'>
                    <h2>Artist Vinyl Releases</h2>
                    <ul>
                        {vinylRecords}
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
        vinylRecords: state.ArtistReducer.vinyl,
     }
}
export default connect(mapStateToProps)(Vinyl);
