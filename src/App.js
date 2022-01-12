import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store"
import {compose} from "redux";
import {initialiseApp} from "./redux/app-reducer";
import withRouter from "./components/common/withRouter/withRouter";
import Preloader from "./components/common/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import './App.css';

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
//import Login from "./components/Login/Login";
const Login = React.lazy(() => import('./components/Login/Login'));

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
                    <React.Suspense fallback={<Preloader/>}>
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
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialised: state.app.initialised
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initialiseApp})
)(App);

const MainApp = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer
                    friends={store.getState().friendsPage.friends}
                    // dispatch={store.dispatch.bind(store)}
                    // store={store}
                />
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;
