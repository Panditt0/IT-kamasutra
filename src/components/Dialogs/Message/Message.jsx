import React from "react";
import style from './Message.module.css'


const Message = (props) => {
    return (
        <div  >
            <div className={`${style.message} ${props.type ==='incoming' ? style.incoming : style.outgoing }`} >
                {props.message}
            </div>
        </div>
    )
}

export default Message    