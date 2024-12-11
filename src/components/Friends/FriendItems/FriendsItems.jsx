import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './FriendItem.module.css';

const FriendsItems = (props) => {
    let path = `/friend/${props.id}`;

    return (
        <li className={style.friendItem}>
            <NavLink to={path} className={style.link}>
                <img src={props.avatar} alt={props.name} className={style.avatarImage} />
                <span className={style.friendName}>{props.name}</span>
            </NavLink>
        </li>
    );
}

export default FriendsItems;