import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id} image={d.image}/>);
    let messagesElements = state.messages
        .map(m => <Message message={m.message} sender={m.sender} key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
};

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);


export default Dialogs;
