import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
function ContactForm() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
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
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("label", { children: "Navn" }), _jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value) }), _jsx("label", { children: "Melding" }), _jsx("textarea", { value: message, onChange: (e) => setMessage(e.target.value) }), _jsx("button", { type: "submit", children: "Send melding" })] }));
}
export default ContactForm;
