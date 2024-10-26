import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Header({ student, degree, points }) {
    return (_jsxs("div", { children: [_jsx("h1", { children: student }), _jsxs("p", { children: [degree, " ", points, " studiepoeng"] })] }));
}
export default Header;
