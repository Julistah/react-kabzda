import React from "react";
import s from './ProfileInfo.module.css';
import PreLoader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
        return <PreLoader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large} alt=""/>
                    {profile.fullName}
                </div>
                <div>
                    <ProfileStatusHooks status = {status} updateStatus={updateStatus}/>
                </div>
                <div>
                    <p>About me:</p>
                    <p>{profile.aboutMe}</p>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>{profile.contacts.facebook}</li>
                        <li>{profile.contacts.website}</li>
                        <li>{profile.contacts.vk}</li>
                        <li>{profile.contacts.twitter}</li>
                        <li>{profile.contacts.instagram}</li>
                        <li>{profile.contacts.youtube}</li>
                        <li>{profile.contacts.github}</li>
                        <li>{profile.contacts.mainLink}</li>
                    </ul>
                </div>
                <div>
                    <h3>Job Status</h3>
                    {profile.lookingForAJob? 'looking ' : 'not looking '}
                    for a job
                    <p>
                        description:
                        {' ' + profile.lookingForAJobDescription}
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
