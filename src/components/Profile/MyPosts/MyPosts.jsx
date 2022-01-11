import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElement = props.posts
        .map(p => <Post message={p.post} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} name={"newPostText"}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
    )
}
const AddNewPostReduxForm = reduxForm({ form : "ProfileAddNewPostForm" })(AddNewPostForm);




export default MyPosts;
