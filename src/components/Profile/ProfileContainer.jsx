import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import Profile from "./Profile";
import {connect} from "react-redux";
import withRouter from "../common/withRouter/withRouter";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";

const ProfileContainer = (props) => {

    let [needToLogin, setNeedToLogin] = useState(false);

    useEffect(() => {
        let userId = props.router.params.userId
        if (!userId) {
            userId = props.authorisedUserId;
            if (!userId) {
                //does not work
                //does not work x2
                setNeedToLogin(true);
                return
            }
        }
        setNeedToLogin(false);
        props.getUserProfile(userId);
        props.getStatus(userId);

    }, [props.router.params.userId]);

    if (needToLogin) return <Navigate to={"/login"}/>;

    return (
        <Profile {...props}
                 isOwner={!props.router.params.userId}
                 profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}
                 savePhoto={props.savePhoto}
                 saveProfile={props.saveProfile}
        />
    )
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    //withAuthRedirect
)(ProfileContainer);