import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <div className={s.dialogs__item}>
                    <NavLink to="/dialogs/1" className={s.dialogs__link} activeClassName={s.active}>name 1</NavLink>
                </div>
                <div className={s.dialogs__item + ' ' + s.active}>
                    <NavLink to="/dialogs/2" className={s.dialogs__link} activeClassName={s.active}>name 2</NavLink>
                </div>
                <div className={s.dialogs__item}>
                    <NavLink to="/dialogs/3" className={s.dialogs__link} activeClassName={s.active}>name 3</NavLink>
                </div>
                <div className={s.dialogs__item}>
                    <NavLink to="/dialogs/4" className={s.dialogs__link} activeClassName={s.active}>name 4</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.messages__item}>test message</div>
                <div className={s.messages__item}>test message</div>
                <div className={s.messages__item}>test message</div>
            </div>
        </div>
    )
}

export default Dialogs
