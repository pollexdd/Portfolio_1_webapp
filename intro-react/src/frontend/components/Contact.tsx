import React from 'react';

interface ContactProps {
    email: string;
}

const Contact: React.FC<ContactProps> = ({ email }) => {
    const handleClick = () => {
        alert(`Email: ${email}`);
    };

    return (
        <div className="contact-container">
            <p className="contact-email">{email}</p>
            <button className="contact-button" onClick={handleClick}>
                Show Email
            </button>
        </div>
    );
};

export default Contact;
