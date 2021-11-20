import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        my posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <Post message='Hi, how are you' likesCount='20'/>
        <Post message='Hi, First post' likesCount='10'/>
    </div>
}
export default MyPosts;
