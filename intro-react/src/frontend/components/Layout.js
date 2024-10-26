import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './Header'; // Importer Header-komponenten
import Footer from './Footer'; // Importer Footer-komponenten (hvis du har en)
const Layout = ({ children }) => {
    const studentInfo = {
        student: 'Herman Fagerlie',
        degree: 'Bachelor IT',
        points: 180
    };
    return (_jsxs("div", { children: [_jsx(Header, { student: studentInfo.student, degree: studentInfo.degree, points: studentInfo.points }), _jsx("main", { children: children }), _jsx(Footer, {})] }));
};
export default Layout;
