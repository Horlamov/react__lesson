import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
return (
<div className={s.item}>
  <img src='https://vraki.net/sites/default/files/inline/images/17_55.jpg'></img>
  { props.message}
  <div>
    <span>like { props.likecount}</span>
  </div>
</div>
)
};

export default Post;