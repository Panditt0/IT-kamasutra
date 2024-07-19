

import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://interier-foto.ru/wp-content/uploads/dlinnye-foto-2.jpg' width='1200px' alt="Background" />
      </div>
      <div>
        <a href='#'>ava + description </a>
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;