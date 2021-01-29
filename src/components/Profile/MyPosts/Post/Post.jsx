import React from 'react';
import s from './Post.module.css';

const Post = () => {
return (
<div className={s.item}>
  <img src='https://vraki.net/sites/default/files/inline/images/17_55.jpg'></img>
  Post 1
  <div>
    <span>like</span>
  </div>
</div>
)
};

export default Post;