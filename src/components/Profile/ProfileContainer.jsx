import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import withRouter from "../common/withRouter/withRouter";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {

        if (!this.props.isAuth) return <Navigate to="/login" />

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
let URLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(URLDataContainerComponent);
