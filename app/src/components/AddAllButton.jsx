//import react and higherOrderComponent memo
import React,{memo} from 'react'
//import React fontawesomeIcon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import React fontawesomeIcon faAdd , faCaretDown
import { faAdd, faCaretDown } from '@fortawesome/free-solid-svg-icons';
//import useDispatch hook from react-redux library
import { useDispatch } from 'react-redux';
//Import Feature openModal from redux library , modalSlice 
import { openModal } from '../redux/slice/modalSlice';

//Create AddAllButton commponent
const AddAllButton = () => {
    //variable dispatch accepts functional hook useDispatch
    const dispatch = useDispatch();
   
    return (
    <div className='addAllButton'>
        {/*AddButton add icon*/}
        <button 
            className='add-button'
            /*onClick call functions dispatch and openModal */
            onClick={() => dispatch(openModal())}>
            <FontAwesomeIcon    
                icon={faAdd}
                className='add-icon'
            />
            <span className='span'>
                Add All
            </span>
        </button>

        {/*OpenButton open icon*/}
        <button className='open-button'>
            <FontAwesomeIcon    
                icon={faCaretDown} 
                className='open-icon'
            />
        </button>
    </div>
    )
}

// export commponent AddAllButton and call memo
export default memo(AddAllButton);