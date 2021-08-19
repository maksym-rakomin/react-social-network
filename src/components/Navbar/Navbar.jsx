import React from "react";
import c from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={c.navbar}>
            <ul className={c.navbar__list}>
                <li className={c.navbar__item}>
                    <a className={c.navbar__link} href="#">profile</a>
                </li>
                <li className={c.navbar__item}>
                    <a className={c.navbar__link} href="#">Messages</a>
                </li>
                <li className={c.navbar__item}>
                    <a className={c.navbar__link} href="#">News</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar