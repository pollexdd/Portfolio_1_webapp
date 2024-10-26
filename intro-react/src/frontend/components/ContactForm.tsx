import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Message sent from ${name}: ${message}`);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label className="form-label">Name</label>
            <input
                className="form-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label className="form-label">Message</label>
            <textarea
                className="form-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="form-submit" type="submit">
                Send
            </button>
        </form>
    );
};

export default ContactForm;
