import React,{ Suspense, useEffect} from 'react';
//import styles for the project app
import './style/styles.css';
//import component Content
import Content from './components/Content';
//import component Main
import Main from './components/Main';
//import component Navbar
import Navbar from './components/Navbar';
//import component SongRow
import SongRow from './components/SongRow';
//import component Spinner
import Spinner from './components/Spinner';
//import component MyError
import MyError from './components/MyError';
//import ErrorBoundary from react-error-boundary library
import { ErrorBoundary } from 'react-error-boundary';
//import useDispatch hook from react-redux library
import { useDispatch } from 'react-redux';
//Import Feature fetchGetSongs from redux library , songSlice 
import { fetchGetSongs } from './redux/slice/songSlice';

const App = () => {
  //variable dispatch accepts functional hook useDispatch
  const dispatch = useDispatch();

  //useEffect hook call functions dispatch and fetchGetSongs
  useEffect(() => {
    dispatch(fetchGetSongs())
  },[dispatch])

  return (  
    <ErrorBoundary FallbackComponent={MyError}>
      {/*include Suspense component , if loading fallback component Spinner */}
      <Suspense fallback={<Spinner/>}>
        {/*include project Main component */}
        <Main>
          {/*include project Content component */}
          <Content>
            {/*include Navbar component */}
            <Navbar/>

            {/*include SongRow component */}
            <SongRow/>
          </Content>
        </Main>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
