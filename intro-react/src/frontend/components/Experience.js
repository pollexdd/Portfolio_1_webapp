import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Experience({ name, children }) {
    return (_jsxs("div", { children: [_jsx("p", { children: name }), children && _jsx("div", { children: children }), " "] }));
}
export default Experience;
