import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.avatar} src={props.image}/>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}


export default DialogItem;
