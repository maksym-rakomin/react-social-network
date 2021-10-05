import React from "react";
import s from './Dialogs.module.css'
import DialogNavItem from "./components/DialogNavItem/DialogNavitem";
import DialogMessage from "./components/DialogMessage/DialogMessage";

const Dialogs = ({ users, messages, currentMessage, updateNewMessage, addMessage}) => {
    const usersElements = users.map(user => <DialogNavItem key={user.id} name={user.name} id={user.id}/>)
    const messagesElements = messages.map(message => <DialogMessage key={message.id} text={message.message}/>)
    const messageField = React.createRef()
    const addMessageLocal = () => {
        addMessage(messageField.current.value)
    }
    const onChangeMessage = () => {
        updateNewMessage(messageField.current.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {usersElements}
            </div>

            <div className={s.messages}>
                {messagesElements}

                <div>
                    <textarea
                        onChange={onChangeMessage}
                        ref={messageField}
                        name="message"
                        id="dialog-message"
                        cols="30"
                        rows="3"
                        value={currentMessage}
                    />
                </div>

                <div>
                    <button onClick={ addMessageLocal }>
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
