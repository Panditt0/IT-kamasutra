import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSml8J7pgVSqfAzpk1tD4IXJlxtuNGMctUOqA&s" alt="" />
      {props.text}
      <div>
        <span>like {props.like}</span>
      </div>
    </div >)
}

export default Post