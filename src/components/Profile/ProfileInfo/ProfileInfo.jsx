import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import PreLoader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/anon.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <PreLoader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
            });
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.photoAndName}>
                    <img src={profile.photos.large || userPhoto} alt="" className={s.avatar}/>
                    {editMode && isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                    <h3 className={s.profileName}>{profile.fullName}</h3>
                </div>

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }}
                                   profile={profile} isOwner={isOwner}/>}

                <div>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>


            </div>

        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            <div> {isOwner && <button className={"btn btn-dark " + s.editButton} onClick={goToEditMode}>Edit</button>} </div>
            <div>
                <b>Full Name: </b>
                <div>
                    {profile.fullName}
                </div>
            </div>
            <div>
                <div>
                    <b>Job Status: </b>
                    {profile.lookingForAJob ? 'looking ' : 'not looking '}for a job
                </div>
                {profile.lookingForAJob &&
                    <div>
                        <b>My professional skills:</b>
                        <div>{profile.lookingForAJobDescription}</div>
                    </div>
                }
            </div>

            <div>
                <b>About me:</b>
                <div>{profile.aboutMe}</div>
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactValue
                ? <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
                : null}
        </div>
    )
}

export default ProfileInfo;
