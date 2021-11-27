import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";


// addPost('yess');

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App posts={state.profilePage.posts}
                     messages={state.dialogsPage.messages}
                     dialogs={state.dialogsPage.dialogs}
                     friends={state.friendsPage.friends}
                     newPostText={state.profilePage.newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

