// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import './Profile.css'; // Make sure to create this CSS file

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/profile`, {
                    method: 'GET',
                    headers: {
                        'x-auth-token': localStorage.getItem('token') // Add token if required
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch profile');
                }
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <div className="profile-container">
            <div className="profile-modal">
                <h1>Your Profile</h1>
                {profile ? (
                    <>
                        <div className="profile-info">
                            <h2>{profile.profile.name}</h2>
                            <p>Email: {profile.profile.email}</p>
                        </div>
                        <h3>Your Posts:</h3>
                        {profile.posts.length === 0 ? (
                            <p>No posts available</p>
                        ) : (
                            profile.posts.map(post => (
                                <div key={post._id} className="post-card">
                                    <h4>{post.title}</h4>
                                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                                    {post.image && <img src={`${process.env.REACT_APP_API_URL}/uploads/${post.image}`} alt={post.title} />}
                                </div>
                            ))
                        )}
                    </>
                ) : (
                    <p>No profile data available</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
