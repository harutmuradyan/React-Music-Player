//import react and higherOrderComponent memo
import React,{memo} from 'react'
//import React fontawesomeIcon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import React fontawesomeIcon faClose
import { faClose } from '@fortawesome/free-solid-svg-icons';
//import useDispatch hook from react-redux library
import { useDispatch } from 'react-redux';
//Import Feature closeModal from redux library , modalSlice 
import { closeModal } from '../redux/slice/modalSlice';

//Create CloseModal commponent
const CloseModal = () => {
    //variable dispatch accepts functional hook useDispatch
    const dispatch = useDispatch();
  
    return (
        <div className='closeModal'>
            {/*CloseModalButton faclose icon*/}
            <button 
                className='closeModal-button'
                /*onClick call functions dispatch and closeModal */
                onClick={() => dispatch(closeModal())}>
                <FontAwesomeIcon 
                    icon={faClose}
                    className='closeModal-icon'
                    />
            </button>
        </div>
    )
}

// export commponent CloseModal and call memo
export default memo(CloseModal);