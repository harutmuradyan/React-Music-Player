//import react and higherOrderComponent memo
import React,{memo} from 'react'

//Create Main commponent
const Main = ({children}) => {
  return (
    <main className='main'>
      {/*Main component children component functional */}
      {children}
    </main>
  )
}

// export commponent Main and call memo
export default memo(Main);