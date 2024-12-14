import React from 'react';
import styles from './PostDetails.module.css';

function PostDetails({ post }) {
  return (
    <div className={styles.postDetails}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;