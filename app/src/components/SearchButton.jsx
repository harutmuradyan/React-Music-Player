//import react and higherOrderComponent memo
import React,{memo} from 'react'
//import React fontawesomeIcon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import React fontawesomeIcon faSearch
import { faSearch } from '@fortawesome/free-solid-svg-icons';


//Create SearchButton commponent
const SearchButton = () => {
  return (
    <button className='search-button'>
      {/*SearchButton search icon */}
      <FontAwesomeIcon    
        icon={faSearch}
        className='search-icon'
      />

      {/*SearchButton search input */}
      <input  
        type='text'
        placeholder='Filter'
        className='search-input'
      />
    </button>
  )
}

// export commponent SearchButton and call memo
export default memo(SearchButton);