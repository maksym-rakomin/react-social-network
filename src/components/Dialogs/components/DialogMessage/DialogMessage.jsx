import React from "react";
import s from "../../Dialogs.module.css";

const DialogMessage = ({text}) => {
    return (<div className={s.messages__item}>{text}</div>)
}

export default DialogMessage
