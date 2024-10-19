// components/Contact.tsx
interface ContactProps {
    email: string;
}

function Contact({ email }: ContactProps) {
    const handleClick = () => {
        alert(`E-post til studenten: ${email}`);
    };

    return (
        <div>
            <p>{email}</p>
            <button onClick={handleClick}>Vis E-post</button>
        </div>
    );
}

export default Contact;