import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let posts = [
    {id: 1, post: 'Hi, how are you', likesCount: 12},
    {id: 2, post: 'Hi, First post', likesCount: 11},
]

let dialogs = [
    {id: '1', name: 'Dimych'}, //id should be in quotes, otherwise routing won't work
    {id: '2', name: 'Alla'},
    {id: '3', name: 'Vova'},
    {id: '4', name: 'Anyone'}
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Hello world)))'},
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts={posts}
            messages={messages}
            dialogs={dialogs}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
