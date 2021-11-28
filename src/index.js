import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App posts={store.getState().profilePage.posts}
                     messages={store.getState().dialogsPage.messages}
                     dialogs={store.getState().dialogsPage.dialogs}
                     friends={store.getState().friendsPage.friends}
                     newPostText={store.getState().profilePage.newPostText}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}/>
                //bind -чтоб в MyPosts.jsx в addPost props.addPost(); чтоб эдд пост имел нормальный this (37)
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
