import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Routes, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import withRouter from "./components/common/withRouter/withRouter";
import {compose} from "redux";
import {initialiseApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        if (!this.props.initialised) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar friends={this.props.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile'>
                            {/*because in react-router-dom there are no optional parameters*/}
                            <Route path=':userId' element={<ProfileContainer/>}/>
                            <Route path='' element={<ProfileContainer/>}/>
                        </Route>

                        <Route path='/dialogs/*'
                               element={<DialogsContainer/>}/>

                        <Route path='/users/*'
                               element={<UsersContainer/>}/>

                        <Route path='/login/*'
                               element={<Login/>}/>

                    </Routes>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialised: state.app.initialised
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initialiseApp})
)(App);
