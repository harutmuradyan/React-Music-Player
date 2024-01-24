//import reateSlice from @reduxjs/toolkit library
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
//import Axios library
import axios from 'axios';

//create project Api BASE_URL
const BASE_URL = ""

//crate initialState
const initialState = {
  // create initial data 
  songs: [
    {
      id : 1,
      songName : "Helo",
      artistName : "Blackbird Blackbird",
      trackNumber : 1
    },
    {
      id : 2,
      songName : "Blind",
      artistName : "Blackbird Blackbird",
      trackNumber : 2
    },
    {
      id : 3,
      songName : "Twin Flames",
      artistName : "Blackbird Blackbird",
      trackNumber : 4
    },
    {
      id : 4,
      songName : "Left to Hurt",
      artistName : "Blackbird Blackbird",
      trackNumber : 5
    },
    {
      id : 5,
      songName : "Starlight",
      artistName : "Blackbird Blackbird",
      trackNumber : 6
    },
    {
      id : 6,
      songName : "Modern Disbelief",
      artistName : "Blackbird Blackbird",
      trackNumber : 7
    },
  ],
  //create first status
  status: "idle",
  //create first error  
  error: null
}

//crate and export function fetchGetSongs
export const fetchGetSongs = createAsyncThunk(
  /*BASE_URL ,*/ async () => {

  try {
    //Axios GET request from Api
    const response = await axios.get(BASE_URL)
    //return data
    return response?.data
  } catch (error) {
    //Error message 
    return error.message
  }
})

//create and export function fetchPostSongs
export const fetchPostSongs = createAsyncThunk(
  /*BASE_URL, */ async (data , thunkAPI) => {

  try {
    //Axios POST request from Api
    const response = await axios.post(BASE_URL, data)
    //return repose data
    return response.data;
  } catch (error) {
    //Error message 
    return thunkAPI.rejectWithValue({ error: error.message })
  }
})

//create Slice Song
const songSlice = createSlice({
  name: 'song',
  initialState: initialState,
  reducers: {
    //create reducer playAll
    playAll : () => {
      //console output message PlayAll functional done
      console.log("Play All")
    }, 
  },
  extraReducers(builder) {
    builder
      //addCase fetchGetSongs function process pending
      .addCase(fetchGetSongs.pending, (state) => {
        state.status = "loading"
      })
      //addCase fetchGetSongs function process succeeded
      .addCase(fetchGetSongs.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.songs = state.songs.concat(action.payload);
      })
      //addCase fetchGetSongs function process failed
      .addCase(fetchGetSongs.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

//export function playAll 
export const { playAll } = songSlice.actions
//export reducer songlSlice
export default songSlice.reducer