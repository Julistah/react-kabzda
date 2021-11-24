import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state from "./redux/state";
import {addPost} from "./redux/state";


// addPost('yess');
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts={state.profilePage.posts}
            messages={state.dialogsPage.messages}
            dialogs={state.dialogsPage.dialogs}
            friends={state.friendsPage.friends}
            addPost={addPost}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
