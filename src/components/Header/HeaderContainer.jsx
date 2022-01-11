import React from "react";
import Header from "./Header";
import {
    getAuthUserData, logout,
    toggleIsFetching,
} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        //isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {
    getAuthUserData, toggleIsFetching, getUserProfile,
    logout
})(HeaderContainer);