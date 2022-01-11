import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddNewMessageForm from "./DialogsForms/AddNewMessageForm/AddNewMessageForm"

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
                <AddNewMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};



export default Dialogs;
