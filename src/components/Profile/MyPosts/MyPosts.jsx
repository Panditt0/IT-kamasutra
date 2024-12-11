import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

import { text } from '@fortawesome/fontawesome-svg-core';

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post text={post.text} like={post.likesCount} />)

  let newPostElement = React.createRef()



  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
    props.updateNewPostText('')


  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={style.myPosts}>
      <div className={style.newPost}>
        <div><textarea placeholder='New Post' onChange = {onPostChange} ref={newPostElement} id='textArea' value={props.newPostText}/></div>
        <div><button onClick={addPost}> New Post</button></div>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;