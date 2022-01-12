import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import AddNewPostForm from "../ProfileForms/AddNewPostForm/AddNewPostForm"

const MyPosts = React.memo((props) => {
        let postsElement =
            [...props.posts]
                .reverse()
                .map(p => <Post key={p.id} message={p.post} likesCount={p.likesCount}/>)

        let onAddPost = (values) => {
            props.addPost(values.newPostText);
        };

        return (
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <AddNewPostForm onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        )
    }
)


export default MyPosts;
