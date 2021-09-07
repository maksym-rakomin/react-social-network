import React from "react";
import c from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={c.navbar}>
            <ul className={c.navbar__list}>
                <li className={c.navbar__item}>
                    <a href="/profile" className={c.navbar__link}>Profile</a>
                </li>
                <li className={c.navbar__item}>
                    <a href="/dialogs" className={c.navbar__link}>Messages</a>
                </li>
                <li className={c.navbar__item}>
                    <a href="/news" className={c.navbar__link}>News</a>
                </li>
                <li className={c.navbar__item}>
                    <a href="/music" className={c.navbar__link}>Music</a>
                </li>
                <li className={c.navbar__item}>
                    <a href="/settings" className={c.navbar__link}>Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
