import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let textMessage = React.createRef()

    let updateMessageInputWindow = () => {
        let text = textMessage.current.value
        props.updateMessageInputWindow(text)

    }

    let updateMessageWindow = () => {
        let text = textMessage.current.value
        props.updateMessageWindow (text)


    }

    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />)
    let messagesElements = props.messages.map(message => < Message message={message.message} type = {message.type} />)
    return (
        <div className={`${style.dialogs}`}>
            <div className={style.dialogs_items}>
                {dialogsElements}

            </div>
            <div className={`${style.messages_items} ${style.messageWindow} `}>

                {messagesElements}

            <textarea onChange={updateMessageInputWindow} placeholder= 'Your message' value={props.messageTextInputValue} ref = {textMessage} ></textarea>
            <button onClick={updateMessageWindow} >Отправить сообщение</button>

            </div>
        </div>
    )
}

export default Dialogs     