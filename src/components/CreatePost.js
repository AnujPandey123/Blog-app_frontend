// src/components/CreatePost.js
import React, { useState, useRef } from 'react'; // Import useRef
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDropzone } from 'react-dropzone';
import './CreatePost.css';
const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const quillRef = useRef(null); // Create a ref for ReactQuill

    const onDrop = acceptedFiles => {
        setImage(acceptedFiles[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', content); // Using "body" to match backend
        if (image) formData.append('image', image);

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts`, {
                method: 'POST',
                headers: {
                    'x-auth-token': localStorage.getItem('token') // Assuming you use JWT for authentication
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to create post. Please try again.');
        }
    };

    // Fix MIME type acceptance
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png, image/jpg' // Restrict to JPEG and PNG images
    });

    return (
        <div className="create-post">
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop an image, or click to select one</p>
                </div>
                {image && <p>Selected image: {image.name}</p>}
                <ReactQuill
                    ref={quillRef} // Apply the ref to avoid deprecated findDOMNode
                    value={content}
                    onChange={setContent}
                    placeholder="Write your post content here..."
                />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;
