//import react and higherOrderComponent memo
import React,{memo} from 'react';
// import propTypes library , Checking data types coming with props 
import PropTypes from 'prop-types';
// import component SongLeftButtonsGroup
import SongLeftButtonsGroup from './SongLeftButtonsGroup';
// import component SongRightButtonsGroup
import SongRightButtonsGroup from './SongRightButtonsGroup';

//Create Song commponent
const Song = ({
    songName,
    artistName,
    trackNumber}) => {

    return (
        <div className='song'>
            {/*include component SongLeftButtonsGroup */}
            <SongLeftButtonsGroup/>

            {/*Song component field article SongName */}
            <span className='song-ArticlesSpan'>
                Song Name : 
            </span>

            {/*Song component field SongName */}
            <p className='song-name'>
                {songName}
            </p>

            {/*Song component field article ArtistName */}
            <span className='song-ArticlesSpan'>
                Artist Name : 
            </span>

            {/*Song component field ArtistName */}
            <p className='song-artistName'>
                {artistName}
            </p>

            {/*Song component field article track*/}
            <span className='song-ArticlesSpan'>
                Track : 
            </span>
            
            {/*Song component field TrackNumber */}
            <p className='song-number'>
                {trackNumber}
            </p>

            {/*include component SongRightButtonsGroup */}
            <SongRightButtonsGroup/>
        </div>
    )
}

// export commponent Song and call memo
export default memo(Song);


// Song components props fields types 
Song.propTypes = {
    songName : PropTypes.string,
    artistName : PropTypes.string,
    trackNumber : PropTypes.number
};