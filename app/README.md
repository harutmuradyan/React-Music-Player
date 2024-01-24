# 1 Project Title `

React Music Player Interface with Music Upload Form

# 2 Project Description `

Objective: Develop a comprehensive React component that not only replicates
the music player interface as per the provided screenshot but also includes a form for users to upload music files from their computer.

# 3 Technologies Used

-React
-Redux
-Axios
-Toolkit

# 4 Component Structure

/public
-index.html
/src
-/assets
--/images
-/components
--AddAllButton.jsx
--CloseModal.jsx
--Content.jsx
--Main.jsx
--MusicUploadForm.jsx
--musicUploadFormModal.jsx
--MyError.jsx
--navbar.jsx
--playAllButton.jsx
--SearchButton.jsx
--Song.jsx
--SongArticles.jsx
--SongLeftButtonsGroup.jsx
--SongList.jsx
--SongRightButtonsGroup.jsx
--SongRow.jsx
--SortButton.jsx
--Spinner.jsx
-/redux
--/slice
---modalSlice.js
---songSlice.js
--store.js
-/style
--styles.css
-App.js
-index.js

# 5 Features

## 5.1 Feature fetchGetSongs

The function is created using createAsyncThunk.Which processes the request in stages: pending, fulfilled, succeeded.The request is made with the help of Axios, the request type is GET.The purpose of the request is to get all the Songs from the server and print them․

## 5.2 Feature fetchPostSongs

The function is created using createAsyncThunk.Which processes the request in stages: pending, fulfilled, succeeded.The request is made with the help of Axios, the request type is POST․The purpose of the survey
give the server all newly added songs․

## 5.3 Feature selectedFileHandler

The function is designed to take all the songs specified by the user with the help of Upload Input.performing a simulation of the process during the operation.
Also, with the help of console, it informs that the files have been taken.

## 5.4 Feature openModal

The function is designed to open a Modal that displays the MusicUploadForm component․The function is designed to open a Modal that displays the MusicUploadForm component: Also, with the help of the console, it is reported that the command of the AddALL button has been executed.

## 5.5 Feature playAll

The function is designed to inform the console that the PlayAll command has been executed.

# 6 Installation

## 6.1 lone the repository

git clone https://github.com/harutmuradyan/React-Music-Player.git

## 6.2 Navigate to the project directory

cd React-Music-Player

## 6.3 Navigate to the project directory

cd app

## 6.4 Install dependencies

npm install

## 6.5 Run the development server

npm run start
