//import react and higherOrderComponent memo
import React,{memo} from 'react'
//import component CloseModal
import CloseModal from './CloseModal';
//import component MusicUploadForm
import MusicUploadForm from './MusicUploadForm';

//Create MusicUploadFormModal commponent
const MusicUploadFormModal = () => {
  return (
    <div className="musicUploadFormModal">
      <div className='musicUploadFormModal-content'>
        {/*include component CloseModal */}
        <CloseModal/>

        {/*include component MusicUploadForm */}
        <MusicUploadForm/>
      </div>
    </div>
  )
}

// export commponent MusicUploadFormModal and call memo
export default memo(MusicUploadFormModal);