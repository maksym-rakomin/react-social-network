import React from "react";
import s from "../../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogNavItem = ({name, id}) => {
    return (
        <div className={s.dialogs__item}>
            <NavLink to={`/dialogs/${id}`} className={s.dialogs__link} activeClassName={s.active}>{name}</NavLink>
        </div>
    )
}

export default DialogNavItem
