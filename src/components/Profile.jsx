import React from 'react'
import style from './Profile.module.css'

const Profile = () => {
    return <nav className={style.content}>
    <div>
      <img src='https://interier-foto.ru/wp-content/uploads/dlinnye-foto-2.jpg' width = '1200px'/>
    </div >
    <div>
      <a href='#'>ava + description </a>
    </div>
    <div>
      <a href='#'>My posts </a>
    </div>
    <div>
      <a href='#'>New Post </a>
    </div>
    <div>
      <a href='#'>Post 1 </a>
    </div>
    <div>
      <a href='#'>Post 2 </a>
    </div>
  </nav>
}

export default Profile