import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../../common/FormControls/FormControls";
import {maxLength10, required} from "../../../../utils/validators/validators";
import React from "react";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       validate={[required, maxLength10]}
                       name={"newMessageBody"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button className={"btn btn-dark"}>Send Message</button>
            </div>
        </form>
    )
};

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
