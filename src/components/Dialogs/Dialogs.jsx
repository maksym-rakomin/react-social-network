import React from "react";
import s from './Dialogs.module.css'
import DialogNavItem from "./components/DialogNavItem/DialogNavitem";
import DialogMessage from "./components/DialogMessage/DialogMessage";

const Dialogs = (props) => {
    const users = [
        {id: 1, name: 'test 1'},
        {id: 2, name: 'test 2'},
        {id: 3, name: 'test 3'},
        {id: 4, name: 'test 4'},
        {id: 5, name: 'test 5'},
    ]

    const messages = [
        {id: 1, message: 'test message 1'},
        {id: 2, message: 'test message 2'},
        {id: 3, message: 'test message 3'},
        {id: 4, message: 'test message 4'},
        {id: 5, message: 'test message 5'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <DialogNavItem name='test 1' id='1'/>
                <DialogNavItem name='test 2' id='2'/>
                <DialogNavItem name='test 3' id='3'/>
                <DialogNavItem name='test 4' id='4'/>
            </div>

            <div className={s.messages}>
                <DialogMessage text='test message 1'/>
                <DialogMessage text='test message 2'/>
                <DialogMessage text='test message 3'/>
                <DialogMessage text='test message 4'/>
            </div>
        </div>
    )
}

export default Dialogs
