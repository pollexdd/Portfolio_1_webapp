import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProjectComponent from './Project';
const Projects = ({ projects, removeProject }) => {
    if (!projects || projects.length === 0) {
        return _jsx("p", { children: "No projects available." });
    }
    return (_jsx("div", { children: projects.map((project) => (_jsxs("div", { children: [_jsx(ProjectComponent, { project: project }), _jsx("button", { onClick: () => removeProject(project.id), children: "Remove" }), " "] }, project.id))) }));
};
export default Projects;
