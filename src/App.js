import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Routes, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.friends}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/*'
                           element={ <ProfileContainer/>}/>
                    <Route path='/dialogs/*'
                           element={<DialogsContainer/>}/>
                    <Route path='/users/*'
                           element={<UsersContainer/>}/>
                </Routes>

            </div>
        </div>
    );
}

export default App;
