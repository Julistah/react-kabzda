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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Alla" id="2"/>
                <DialogItem name="Vova" id="3"/>
                <DialogItem name="Anyone" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="How are you"/>
                <Message message="Hello world)))"/>
            </div>
        </div>
    )
}

export default Dialogs;
