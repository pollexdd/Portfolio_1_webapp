import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Contact({ email }) {
    const handleClick = () => {
        alert(`E-post til studenten: ${email}`);
    };
    return (_jsxs("div", { children: [_jsx("p", { children: email }), _jsx("button", { onClick: handleClick, children: "Vis E-post" })] }));
}
export default Contact;
