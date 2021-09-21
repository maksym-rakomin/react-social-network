import React from "react";
import s from './Dialogs.module.css'
import DialogNavItem from "./components/DialogNavItem/DialogNavitem";
import DialogMessage from "./components/DialogMessage/DialogMessage";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <DialogNavItem name='test 1' id='1' />
                <DialogNavItem name='test 2' id='2' />
                <DialogNavItem name='test 3' id='3' />
                <DialogNavItem name='test 4' id='4' />
            </div>

            <div className={s.messages}>
                <DialogMessage text='test message 1' />
                <DialogMessage text='test message 2' />
                <DialogMessage text='test message 3' />
                <DialogMessage text='test message 4' />
            </div>
        </div>
    )
}

export default Dialogs
