import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} image={d.image}/>);

    let messagesElements = state.messages
        .map(m => <Message message={m.message} sender={m.sender}/>);

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    let newMessageElement = React.createRef();
    let newMessageBody = state.newMessageBody;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div>
                            <textarea placeholder='Enter Your Message'
                                      value={newMessageBody}
                                      onChange={onNewMessageChange}
                                      ref={newMessageElement}/>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
