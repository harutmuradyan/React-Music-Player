//import react and higherOrderComponent memo
import React,{memo} from 'react'
//import React fontawesomeIcon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import React fontawesomeIcon faPlay , faCaretDown
import { faCaretDown,faPlay } from '@fortawesome/free-solid-svg-icons';
//import useDispatch hook from react-redux library
import { useDispatch } from 'react-redux';
//Import Feature PlayAll from redux library , songSlice 
import { playAll } from '../redux/slice/songSlice';

//Create PlayAllButton commponent
const PlayAllButton = () => {
    //variable dispatch accepts functional hook useDispatch
    const dispatch = useDispatch();

    return (
        <div className='playAllButton'>
            {/*PlayButton play icon */}
            <button className='play-button'>
                <FontAwesomeIcon    
                    icon={faPlay}
                    className='play-icon'
                    /*onClick call functions dispatch and playAll */
                    onClick={() => dispatch(playAll())}
                />

                {/*PlayButton Play All element */}
                <span className='span'>Play All</span>
            </button>

            {/*OpenButton open icon */}
            <button className='open-button'>
                <FontAwesomeIcon    
                    icon={faCaretDown}  
                    className='open-icon'
                />
            </button>
        </div>
    )
}

// export commponent PlayAllButton and call memo
export default memo(PlayAllButton);