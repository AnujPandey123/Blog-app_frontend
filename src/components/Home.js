import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts`);
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="home-container">
            <h1>Home Page</h1>
            {posts.length === 0 ? (
                <p>No posts available</p>
            ) : (
                <div className="posts-grid">
                    {posts.map(post => (
                        <div key={post._id} className="post-card">
                            <h2 className="post-title">{post.title}</h2>
                            {post.image && <img className="post-image" src={`${process.env.REACT_APP_API_URL}/uploads/${post.image}`} alt={post.title} />}
                            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
