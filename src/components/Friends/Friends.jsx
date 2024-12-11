import React from 'react';
import style from './Friends.module.css';
import FriendsItems from './FriendItems/FriendsItems';

const Friends = (props) => {
    // Фильтрация онлайн друзей
    let onlineFriends = props.friends.filter(friend => friend.isOnline);

    return (
        <div className={style.friends}>
            <h3 className={style.friendsTitle}>Friends Online</h3>
            <ul className={style.friendsItems}>
                {onlineFriends.map(friend => (
                    <FriendsItems 
                        key={friend.id} // Уникальный ключ
                        id={friend.id} 
                        avatar={friend.avatar} 
                        name={friend.name} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default Friends;