import React from "react";
import s from './ProfileInfo.module.css';
import PreLoader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <PreLoader />
    }

    return (
        <div>
            {/*<div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
                    alt='background'
                />
            </div>*/}
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt=""/>
                    {props.profile.fullName}
                </div>
                <div>
                    <ProfileStatusHooks status = {props.status} updateStatus={props.updateStatus}/>
                </div>
                <div>
                    <p>About me:</p>
                    <p>{props.profile.aboutMe}</p>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>{props.profile.contacts.facebook}</li>
                        <li>{props.profile.contacts.website}</li>
                        <li>{props.profile.contacts.vk}</li>
                        <li>{props.profile.contacts.twitter}</li>
                        <li>{props.profile.contacts.instagram}</li>
                        <li>{props.profile.contacts.youtube}</li>
                        <li>{props.profile.contacts.github}</li>
                        <li>{props.profile.contacts.mainLink}</li>
                    </ul>
                </div>
                <div>
                    <h3>Job Status</h3>
                    {props.profile.lookingForAJob? 'looking ' : 'not looking '}
                    for a job
                    <p>
                        description:
                        {' ' + props.profile.lookingForAJobDescription}
                    </p>
                </div>
                <div>

                </div>

                Ava + desc
            </div>

        </div>
    )
}
export default ProfileInfo;
