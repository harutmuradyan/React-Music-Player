//import react and higherOrderComponent memo
import React,{memo} from 'react'

//Create MyError commponent
const MyError = ({error}) => {
  return (
    <h1>{error}</h1>
  )
}

// export commponent MyError and call memo
export default memo(MyError);