//import react and higherOrderComponent memo
import React,{memo} from 'react'
//import component PlayAllButton
import PlayAllButton from './PlayAllButton';
//import component AddAllButton
import AddAllButton from './AddAllButton';
//import component SortButton
import SortButton from './SortButton';
//import component SearchButton
import SearchButton from './SearchButton';
//import component MusicUploadFormModal
import MusicUploadFormModal from './MusicUploadFormModal';
//import useSelector hook from react-redux library
import { useSelector } from 'react-redux';

//Create Navbar commponent
const Navbar = () => {
  const {isOpen} = useSelector(state => state.modal)
  
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        {/*include PlayAllButton component*/}
        <PlayAllButton/>

        {/*include AddAllButton component*/}
        <AddAllButton/>

        {/*if IsOpen true -> include MusicUploadFormModal component*/}
        {isOpen && <MusicUploadFormModal />}
      </div>
      
      <div className='navbar-right'>
        {/*include SortButton component*/}
        <SortButton/>

        {/*include SearchAllButton component*/}
        <SearchButton/>
      </div>
    </nav>
  )
}

// export commponent Navbar and call memo
export default memo(Navbar);