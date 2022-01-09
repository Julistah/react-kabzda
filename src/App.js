import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Routes, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar friends={props.friends}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'>
                        {/*because in react-router-dom there are no optional parameters*/}
                        <Route path=':userId' element={ <ProfileContainer/>}/>
                        <Route path='' element={ <ProfileContainer/>}/>
                    </Route>
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
