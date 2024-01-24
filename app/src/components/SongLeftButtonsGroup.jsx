//import react and higherOrderComponent memo
import React,{memo} from 'react'
//import React fontawesomeIcon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import React fontawesomeIcon faPlay , faBars
import { faBars, faPlay } from '@fortawesome/free-solid-svg-icons';

//Create SongLeftButtonsGroup commponent
const SongLeftButtonsGroup = () => {
  return (
    <div className='song-buttonsLeftGroup'>
      {/*BarButton Bars icon */}
      <button className='song-bar'>
        <FontAwesomeIcon 
          icon={faBars} />
      </button>

      {/*PlayButton play icon */}
      <button className='song-play'>
        <FontAwesomeIcon 
          icon={faPlay} />
      </button>
    </div>
  )
}

// export commponent SongLeftButtonsGroup and call memo
export default memo(SongLeftButtonsGroup);