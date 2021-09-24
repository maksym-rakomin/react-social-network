import React from "react";
import s from './Dialogs.module.css'
import DialogNavItem from "./components/DialogNavItem/DialogNavitem";
import DialogMessage from "./components/DialogMessage/DialogMessage";

const Dialogs = ({ users, messages}) => {
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
