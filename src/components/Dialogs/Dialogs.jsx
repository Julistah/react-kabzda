import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="dialogs/1">
                        valera
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="dialogs/2">
                        nikita
                    </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className="message"> a</div>
                <div className="message"> f</div>
                <div className="message"> c</div>
            </div>
        </div>
    )
}

export default Dialogs;
