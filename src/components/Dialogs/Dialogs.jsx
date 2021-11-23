import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: '1', name: 'Dimych'}, //id should be in quotes, otherwise routing won't work
        {id: '2', name: 'Alla'},
        {id: '3', name: 'Vova'},
        {id: '4', name: 'Anyone'}
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Hello world)))'},
    ]

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages
        .map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
