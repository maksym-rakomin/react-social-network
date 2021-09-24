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

    const usersElements = users.map(user => <DialogNavItem key={user.id} name={user.name} id={user.id}/>)
    const messagesElements = messages.map(message => <DialogMessage key={message.id} text={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {usersElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs
