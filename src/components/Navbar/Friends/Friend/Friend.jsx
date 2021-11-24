import React from "react";
import s from './Friend.module.css'



const Friend = (props) => {
    return (
        <div>
            <div>
                <img className={s.avatar} src={props.image}/>
            </div>
            <div>
                <p>{props.name}
                </p>
            </div>
        </div>

    )
}


export default Friend;
