import React from "react";
import s from './Friends.module.css'
import Friend from "./Friend/Friend";



const Friends = (props) => {

    let fiendsElement = props.friends
        .map(f => <Friend name={f.name} image={f.image}/>)

    return (
        <div>
            <div className={s.friends}>
                {fiendsElement}
            </div>
        </div>

    )
}


export default Friends;
