import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import actions from '../actions/artist';

export class Vinyl extends Component {
    render() {
        if(this.props.vinylRecords !== null){
            let vinylRecords = this.props.vinylRecords.map(function(vinylRecord){
                return <li key={vinylRecord.id}>
                    <a href={'https://www.discogs.com/' + vinylRecord.uri} target='_blank'><img src={vinylRecord.thumb} /></a>
                    {vinylRecord.title} {vinylRecord.year}</li>
            });
            return(
                <div className='vinylList'>
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
