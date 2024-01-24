//import react and higherOrderComponent memo
import React,{memo} from 'react'
//import useSelector hook from react-redux library
import { useSelector } from 'react-redux'
// import component SongArticles
import SongArticles from './SongArticles'
// import component Spinner
import Spinner from './Spinner'
// import component MyError
import MyError from './MyError'
// import component Song
import Song from './Song'

//Create SongList commponent
const SongList = () => {
  /*output values songs,status,error from redux library state-> songs*/
  const { songs , status , error } =  useSelector((state) => state.songs)
  
  return (
    <>
      {/*if error true -> include MyError component, else output null*/}
      {error 
        ? <MyError/> 
        : null}

      {/*if status loading -> include Spinner component, else output null*/}
      {status === "loading" 
        ? <Spinner /> 
        : null}

      {/*if songs -> include SongArticles component, else output null*/}
      {songs 
        ? <SongArticles/> 
        : null}

      {/*Mapping songs data block*/}
      <ul className='songList'>
        {
          /*if songs null -> output No files found , else mapping songs data*/
          songs === null 
          ? <h2 className='title'>
            No files found
            </h2>
          : [...songs].map((e,index) => (
            /*mapping  element Song component and Fields to props*/
            <Song 
              key={index}
              songName={e.songName}
              artistName={e.artistName}
              trackNumber={e.trackNumber}
            />
          ))
        }
      </ul>
    </>
  )
}

// export commponent SongList and call memo
export default memo(SongList);