import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../../common/FormControls/FormControls";
import {maxLength30, required} from "../../../../utils/validators/validators";
import React from "react";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       validate={[required, maxLength30]}
                       name={"newPostText"} placeholder={"Post message"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export default reduxForm({ form : "ProfileAddNewPostForm" })(AddNewPostForm);
