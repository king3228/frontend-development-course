import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import PostDetails from './PostDetails';
import styles from './App.module.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Posts List</h1>
      <PostList posts={posts} onSelect={setSelectedPost} />
      {selectedPost && <PostDetails post={selectedPost} />}
    </div>
  );
}

export default App;