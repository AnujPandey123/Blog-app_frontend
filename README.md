# Full-Stack Blog Application

This is a full-stack blog application built with React, Node.js, Express, and MongoDB. The application allows users to sign up, log in, create, read, update, and delete blog posts, as well as comment on and like posts. It also includes a search functionality for finding posts by title or content.

## Demo: https://blog-app-frontend-wkzb.onrender.com/
## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Environment Setup](#environment-setup)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure JWT-based login and signup functionality.
- **Blog Posts**: Users can create, edit, delete, and view blog posts.
- **Comments and Likes**: Users can comment on and like posts.
- **Search Functionality**: Users can search for blog posts by title or content.
- **Responsive Design**: The application is fully responsive and works on various devices.
- **Secure Routes**: Routes are protected based on authentication status.

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Render

## Environment Setup

### Prerequisites

- Node.js (v14.x or later)
- MongoDB (Local or Atlas)
- Render account for deployment

### Clone the Repository

```bash
git clone https://github.com/yourusername/blog-application.git
cd blog-application
Frontend Setup
Navigate to the frontend directory:
bash
Copy code
cd ../frontend
Install the required dependencies:
bash
Copy code
npm install
Create a .env file in the frontend directory and configure the following environment variables:
plaintext
Copy code
REACT_APP_API_URL=http://localhost:5000
Run the frontend development server:
bash
Copy code
npm start
The frontend will start on http://localhost:3000.

Deployment
To deploy the full-stack application to Render:

Backend Deployment
Push your backend code to a Git repository (e.g., GitHub).

Create a new Web Service on Render:

Go to the Render dashboard.
Click on "New" -> "Web Service".
Connect it to your backend repository.
Set the environment variables (MONGODB_URI, JWT_SECRET) in Render.
Deploy the backend and note the generated URL.
Frontend Deployment
Push your frontend code to a Git repository (e.g., GitHub).

Create a new Static Site on Render:

Go to the Render dashboard.
Click on "New" -> "Static Site".
Connect it to your frontend repository.
Set the environment variable REACT_APP_API_URL to the URL of your deployed backend service.
Deploy the frontend.
Environment Variables
For the application to function correctly, the following environment variables need to be set:

Backend
PORT: The port on which the backend server runs (default: 5000).
MONGODB_URI: The MongoDB connection URI.
JWT_SECRET: Secret key for JWT token generation.
Frontend
REACT_APP_API_URL: The base URL of the backend API (e.g., http://localhost:5000 for local development or your deployed backend URL).
Usage
User Authentication:

Users can sign up and log in using their email and password.
After logging in, users can create new blog posts, and edit or delete their own posts.
Blog Posts:

View all posts on the home page.
Click on a post to view its details.
Logged-in users can create, edit, and delete their posts.
Comments and Likes:

Users can comment on and like posts.
Comments and likes are visible on the post detail page.
Search:

Use the search bar to find posts by title or content.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch-name).
Make your changes and commit them (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch-name).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
