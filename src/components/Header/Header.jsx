import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logonotfb.png"

const Header = (props) => {
    return <header className={s.header}>
        <img
            src={logo}
            alt='logo'
        />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button className="btn btn-dark" onClick={props.logout}>Log Out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header;
