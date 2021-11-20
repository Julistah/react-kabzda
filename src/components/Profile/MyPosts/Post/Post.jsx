import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img
            src='https://st2.depositphotos.com/2668729/6278/v/600/depositphotos_62783141-stock-illustration-male-avatar-icon-on-white.jpg'/>
        {props.message}
        <div>
            <span> like {props.likesCount}</span>
        </div>

    </div>
}
export default Post;
