//import react and higherOrderComponent memo , and hooks ` useCallback , useState
import React,{memo , useCallback, useState} from 'react'
//import component MyError
import MyError from './MyError';
//import component Spinner
import Spinner from './Spinner';
//import image faile from assets directory
import uploadFile from '../assets/images/upload-icon.png'
//import useDispatch and useSelector hooks from react-redux library
import { useDispatch , useSelector } from 'react-redux';
//Import Feature fetchPostSongs from redux library , songSlice 
import { fetchPostSongs } from '../redux/slice/songSlice';


//Create MusicUploadForm commponent
const MusicUploadForm = () => {
  //crate failes array and setFailes functional from hook useState
  const [failes,setFailes] = useState([]);
  //crate uploadStatus element and setFailes functional from hook useState
  const [uploadStatus, setUploadStatus] = useState("");
  //variable dispatch accepts functional hook useDispatch
  const dispatch = useDispatch();
  /*output values status,error from redux library state-> songs*/
  const {status , error } = useSelector(state => state.songs);

  /*crate upload input select failes process functional*/
  const selectedFileHandler = useCallback((e) => {
    /*if event target -> process status initial*/
    if(e.target.files) {
      setUploadStatus("initial");
      setFailes(e.target.files);
    }

    if (failes) {
      /*if failes -> process status uploading*/
      setUploadStatus("uploading");

      /*after 5 seconds -> process status success*/
      setTimeout(() => {
        setUploadStatus("success")

        console.log("upload failes")

      },5000)

    } else {
      /*else -> process status fail*/
      setUploadStatus("fail");
    }
  },[failes])

  /*upload input select failes process result component*/
  const Result = ({status}) => {
    if (status === "success") {
      return <p>✅ Uploaded successfully!</p>;
    } else if (status === "fail") {
      return <p>❌ Upload failed!</p>;
    } else if (status === "uploading") {
      return <p>⏳ Uploading started...</p>;
    } else {
      return null;
    }
  };


  return (
    <form className='musicUploadForm'>
      <div className='musicUploadForm-block'>
        {/*MusicUploadForm title block*/}
        <h2 className='title'>
          Upload Files
        </h2>
      </div>

      <div className='musicUploadForm-block'>
        <div className='musicUpload'>
          <div className='musicUpload-block'>
            {/*MusicUploadForm Label for input seslect a faile*/}
            <label  
              className="musicUpload-label" 
              htmlFor="files">
              Select a file

              <div className='musicUpload-block__image'>
              <img 
                src={uploadFile}
                alt={uploadFile}
                loading='lazy'
                className='musicUpload-image'
              />
              </div>
            </label>

            {/*MusicUploadForm fails input*/}
            <input 
              type="file" 
              id="files" 
              /*select more failes*/
              multiple
              className='musicUpload-uploadInput'
              /*input accpet mp3 wav*/
              accept=".mp3, .wav"
              /*onChange call functions selectedFileHandler and argument event */
              onChange={(e) => selectedFileHandler(e)} 
            />
          </div>

          <div className='musicUpload-block'>
            {/*Mapping failes data */}
            {failes &&
              [...failes].map((file, index) => (
              <ul 
                className='musicUpload-details'
                key={file.name}>
                File number {index + 1} details:
                {/*Mapping element name block */}
                <li className='musicUpload-details__item'>
                  Name: 
                  <span className='musicUpload-details__span'>
                    {file.name}
                  </span>  
                </li>
              </ul>
            ))}
          </div>

          {/*Simulation Upload fails result output*/}
          <Result 
            status={uploadStatus} />

          {/*if uploadStatus success -> output form submit button, else output null*/}
          {uploadStatus === "success" 
            ? <div className='musicUploadForm-block'>
                {/*if error  -> output MyError component , else output null*/}
                {error 
                  ? <MyError/> 
                  : null}

                {/*if status loading  -> output Spinner component , else output null*/}
                {status === "loading" 
                  ? <Spinner/> 
                  : null}

                {/*uploadFrom submit button*/}
                <button
                  type='submit' 
                  value="submit"
                  className='musicUploadForm-submit'
                  /*onClick call functions dispatch and fetchPostSongs + data */
                  onClick={() => dispatch(fetchPostSongs(failes))}>
                  Upload
                </button>
              </div>
            : null
          }
        </div>
      </div>
    </form>
  )
}

// export commponent MusicUploadForm and call memo
export default memo(MusicUploadForm);