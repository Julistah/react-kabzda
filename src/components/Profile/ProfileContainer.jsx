import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import withRouter from "../common/withRouter/withRouter";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorisedUserId;
            if (!userId) {
                //does not work
                //this.props.router.navigate('/login');
                return;
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    //withAuthRedirect
)(ProfileContainer);