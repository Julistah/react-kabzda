import React from "react";
import s from './../Dialogs.module.css'

const Message = (props) => {

    function getSender (switcher){
        if (switcher ===1){
            return s.left
        }
        else {
            return s.right
        }
    }

    return (
        <div className={s.message +" "+ getSender(props.sender)}>
            {props.message}
        </div>
    )
}

export default Message;
