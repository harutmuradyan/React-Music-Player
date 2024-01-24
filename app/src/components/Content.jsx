//import react and higherOrderComponent memo
import React,{memo} from 'react'

//Create Content commponent
const Content = ({children}) => {
  return (
    <div className='content'>
      {/*Content component children component functional */}
      {children}
    </div>
  )
}

// export commponent Content and call memo
export default memo(Content);