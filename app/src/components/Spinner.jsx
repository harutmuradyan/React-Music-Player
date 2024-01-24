//import react and higherOrderComponent memo
import React,{memo} from 'react'

//Create Spinner commponent
const Spinner = () => {
  return (
    <div className='sipnner'>
      <div className='sipnner-content'>

        {/* Spinner loader element */}
        <span className='spinner-loader'></span>
      </div>
    </div>
  )
}

// export commponent Spinner and call memo
export default memo(Spinner);