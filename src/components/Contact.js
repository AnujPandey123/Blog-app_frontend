// src/components/Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import for envelope icon
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brands icons
import './Contact.css'; // Ensure you have this CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-modal">
                <div className="contact-item">
                    <a href="mailto:anujpandey0513@gmail.com" className="contact-link">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                        <span>Email</span>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://github.com/AnujPandey123" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                        <span>GitHub</span>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/anuj-pandey-551bb6226/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://www.instagram.com/pande_y54/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
