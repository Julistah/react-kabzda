import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.friends}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile
                        posts={props.posts}
                        newPostText={props.newPostText}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs
                        messages={props.messages}
                        dialogs={props.dialogs}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
