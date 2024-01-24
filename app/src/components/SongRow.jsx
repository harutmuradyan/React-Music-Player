//import react and higherOrderComponent memo
import React,{memo} from 'react'
// import component SongList
import SongList from './SongList';

//Create SongRow commponent
const SongRow = () => {
  return (
    <section className='songRow'>
      {/*Include SongList component */}
      <SongList/>
    </section>
  )
}

// export commponent SongRow and call memo
export default memo(SongRow);