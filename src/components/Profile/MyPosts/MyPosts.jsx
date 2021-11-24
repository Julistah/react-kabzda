import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts
        .map(p => <Post message={p.post} likesCount={p.likesCount}/>)

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    let newPostElement = React.createRef();

    return (
        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )

}
export default MyPosts;
