//import react and higherOrderComponent memo
import React,{memo} from 'react'
//import React fontawesomeIcon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import React fontawesomeIcon faSort , faCaretDown
import { faCaretDown, faSort } from '@fortawesome/free-solid-svg-icons';

//Create SortButton commponent
const SortButton = () => {
  return (
    <button className='sort-button'>
      {/*SortButton sort icon */}
      <FontAwesomeIcon    
        icon={faSort} 
        className='sort-icon'
      />

      {/*SortButton track Num element */}
      <span className='span'>
        Track Num...
      </span>
      
      {/*SortButton Down icon */}
      <FontAwesomeIcon 
        icon={faCaretDown}  
        className='sort-iconDown'
      />
    </button>
  )
}

// export commponent SortButton and call memo
export default memo(SortButton);