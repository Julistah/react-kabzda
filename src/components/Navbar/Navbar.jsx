import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return <nav className={s.nav}>
        <div>
            <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>
                Profile
            </NavLink>
        </div>
        <div>
            <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>
                Dialogs
            </NavLink>
        </div>
        <div>
            <NavLink to='/users' className={navData => navData.isActive ? s.active : s.item}>
                Users
            </NavLink>
        </div>
        {/*<div className={s.item}>
            <a>
                News
            </a>
        </div>
        <div className={s.item}>
            <a>
                Music
            </a>
        </div>
        <div className={s.item}>
            <a>
                Settings
            </a>
        </div>*/}
        <div>
            <h2 className={s.item}>
                Friends
            </h2>
            <Friends friends={props.friends}/>
        </div>
    </nav>
}
export default Navbar;
