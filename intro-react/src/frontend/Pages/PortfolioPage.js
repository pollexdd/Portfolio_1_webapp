import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from '../components/Layout'; // Import Layout
import Projects from '../components/Projects'; // Import Projects component
// Simulate projects and the function for removing a project
const sampleProjects = [
    { id: '1', title: 'Project 1', description: 'Description 1', category: 'Web', publishedAt: '2024-10-19', createdAt: '2024-09-01' },
    { id: '2', title: 'Project 2', description: 'Description 2', category: 'Mobile', publishedAt: '2024-10-20', createdAt: '2024-09-02' }
];
const removeProject = (id) => {
    console.log(`Remove project with id: ${id}`);
};
const PortfolioPage = () => {
    return (_jsxs(Layout, { children: [_jsx("h1", { children: "My Portfolio" }), _jsx(Projects, { projects: sampleProjects, removeProject: removeProject }), "  "] }));
};
export default PortfolioPage;
