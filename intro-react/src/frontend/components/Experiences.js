import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/frontend/components/Experiences.tsx
import Experience from './Experience'; // Removed the '.tsx' extension
function Experiences({ experiences }) {
    if (experiences.length === 0) {
        return _jsx("p", { children: "Ingen erfaringer" });
    }
    return (_jsx("div", { children: experiences.map((experience, index) => (_jsx(Experience, { name: experience.name, children: _jsxs("span", { children: ["Mer info om ", experience.name] }) }, index))) }));
}
export default Experiences;
