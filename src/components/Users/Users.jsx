import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css";

let Users = ({onPageChanged, totalUsersCount, pageSize, currentPage, users, ...props}) => {
    return (
        <div>
            <div>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            </div>
            <div className={styles.usersPage}>
                {
                    users.map(u =>
                        <User user={u}
                              followingInProgress={props.followingInProgress}
                              unfollow={props.unfollow}
                              follow={props.follow}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Users;