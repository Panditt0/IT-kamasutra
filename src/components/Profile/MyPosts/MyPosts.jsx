import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={style.myPosts}>
      <div className={style.posts}>
        <div className={style.item}>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;