import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, post: 'Hi, how are you', likesCount: 12},
        {id: 2, post: 'Hi, First post', likesCount: 11},
    ]
    let postsElement = posts
        .map(p => <Post message={p.post} likesCount={p.likesCount}/>)


    return (
        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )

}
export default MyPosts;
