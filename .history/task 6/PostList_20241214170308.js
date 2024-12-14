import React from 'react';
import styles from './PostList.module.css';

function PostList({ posts, onSelect }) {
  return (
    <ul className={styles.postList}>
      {posts.map(post => (
        <li key={post.id} className={styles.postItem} onClick={() => onSelect(post)}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default PostList;