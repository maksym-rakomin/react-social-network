import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar__list}>
                <li className={s.navbar__item}>
                    <NavLink to="/profile" className={s.navbar__link} activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.navbar__item}>
                    <NavLink to="/dialogs" className={s.navbar__link} activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.navbar__item}>
                    <NavLink to="/news" className={s.navbar__link} activeClassName={s.active}>News</NavLink>
                </li>
                <li className={s.navbar__item}>
                    <NavLink to="/music" className={s.navbar__link} activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.navbar__item}>
                    <NavLink to="/settings" className={s.navbar__link} activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
