import React from "react";
import c from './Header.module.css'

const Header = () => {
    return (
        <header className={c.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"/>
        </header>
    )
}

export default Header