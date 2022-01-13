import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/anon.jpg";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow,}) => {
    return (
        <div>
            <div key={user.id} className={styles.userBlock}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={styles.userPhoto} alt='user avatar'/>
                            </NavLink>
                        </div>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button className={"btn btn-dark"}
                                              disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  unfollow(user.id)
                                              }}>
                                        Unfollow</button>
                                    : <button className={"btn btn-dark"}
                                              disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id);
                                              }}>
                                        Follow</button>}
                        </div>
                    </span>
            </div>
        </div>
    )

}

export default User;