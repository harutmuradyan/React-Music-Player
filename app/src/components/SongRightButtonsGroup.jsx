//import react and higherOrderComponent memo
import React,{memo} from 'react'
//import React fontawesomeIcon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import React fontawesomeIcon faCaretDown,faCheck,faHeart,faShare
import { faCaretDown, faCheck, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';


//Create SongRightButtonsGroup commponent
const SongRightButtonsGroup = () => {
  return (
    <div className='song-buttonsRightGroup'>
        {/*HeartButton and heart icon */}
        <button className='song-heart'>
            <FontAwesomeIcon 
                icon={faHeart} />
        </button>

        {/*CheckButton and check icon */}
        <button className='song-check'>
            <FontAwesomeIcon 
                icon={faCheck} />
        </button>

        {/*ShareButton and share icon */}
        <button className='song-share'>
            <FontAwesomeIcon 
                icon={faShare} />
        </button>

        {/*DownButton and down icon */}
        <button className='song-down'>
            <FontAwesomeIcon 
                icon={faCaretDown}  
            />
        </button>
    </div>
  )
}

// export commponent SongRightButtonGroup and call memo
export default memo(SongRightButtonsGroup);