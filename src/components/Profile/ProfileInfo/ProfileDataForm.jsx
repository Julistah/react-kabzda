import React from "react";
import {createField, Input, TextArea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import {maxLength50} from "../../../utils/validators/validators";
import s from './ProfileInfo.module.css';
import styles from "../../common/FormControls/FormControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {error &&
                <div className={styles.formSummaryError}>{error}</div>
            }
            <div>
                <b>Full Name: </b>{createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <div>
                    <b>Job Status:</b>
                    {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>
                <div>
                    <b>My professional skills:</b>
                    {createField("My professional skills", "lookingForAJobDescription", [maxLength50], TextArea)}
                </div>
            </div>

            <div>
                <b>About me:</b>
                {createField("About me", "aboutMe", [maxLength50], TextArea)}
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}:</b> {createField("key", "contacts." + key, [], Input)}
                    </div>
                })}
            </div>
        </form>
    )
}

export default reduxForm({form: "edit-profile"})(ProfileDataForm);