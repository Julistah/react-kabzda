import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                friends={store.getState().friendsPage.friends}
                // dispatch={store.dispatch.bind(store)}
                // store={store}
            />
        </Provider>

        {/*bind -чтоб в MyPosts.jsx в addPost props.addPost(); чтоб эдд пост имел нормальный this (37)*/}
    </BrowserRouter>,
    document.getElementById('root')
)




