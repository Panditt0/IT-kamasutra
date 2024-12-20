import React from "react";
import style from './DialogItem.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (<div className={style.dialogItem}>
        <img className = {style.avatarImage} src={props.avatar}/>
        <NavLink className = {style.link} to={path}> {props.name} </NavLink>
    </div>

    )
}


export default DialogItem