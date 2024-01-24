//import react and higherOrderComponent memo
import React,{memo} from 'react'

//Create SongArticles commponent
const SongArticles = () => {
  return (
    <div className='songArticles'>
      {/*SongArticles component offset block */}
      <span className='offset-1'></span>

      {/*SongArticles component field article SongName*/}
      <p className='song-name borderLeftWhite'>
        SongName
      </p>

      {/*SongArticles component field article ArtistName */}
      <p className='song-artistName borderLeftWhite'>
        Artist Name
      </p>

      {/*SongArticles component field article Track */}
      <p className='song-number borderLeftWhite'>
        Track
      </p>

      {/*SongArticles component offset block */}
      <span className='offset-2'></span>
    </div>
  )
}

// export commponent SongArticles and call memo
export default memo(SongArticles);