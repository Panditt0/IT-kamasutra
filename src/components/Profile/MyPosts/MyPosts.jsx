import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={style.myPosts}>
      <div className={style.posts}>
        <div className={style.item}>
          <Post text = 'Привет, как дела?' like = '1' />
          <Post  text = 'Первый пост' like = '2'/>
          <Post like = '3' />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;