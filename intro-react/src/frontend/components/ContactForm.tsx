import { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) {
            alert('Vennligst fyll ut alle feltene.');
            return;
        }
        const formData = { name, message };
        alert(JSON.stringify(formData, null, 2));
        setName('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Navn</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label>Melding</label>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Send melding</button>
        </form>
    );
}

export default ContactForm;
