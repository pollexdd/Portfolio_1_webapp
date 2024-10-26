import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/frontend/App.tsx
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Projects from './components/Projects';
import CreateProject from './components/CreateProject';
import ContactForm from './components/ContactForm';
import { getProjects } from './services/api';
function App() {
    const student = {
        name: 'Herman Fagerlie',
        degree: 'Bachelor IT',
        points: 180,
        email: 'hermanfa@hiof.no',
        experiences: [
            { name: 'Figma UI for customer' },
            { name: 'Website for customer' }
        ]
    };
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const fetchedProjects = await getProjects();
                setProjects(fetchedProjects);
            }
            catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);
    const addProject = (newProject) => {
        const newProjectWithId = {
            ...newProject,
            id: (projects.length + 1).toString(),
            createdAt: new Date().toISOString(),
        };
        setProjects([...projects, newProjectWithId]);
    };
    const removeProject = (id) => {
        setProjects(projects.filter((project) => project.id !== id));
    };
    return (_jsxs("div", { children: [_jsx(Header, { student: student.name, degree: student.degree, points: student.points }), _jsx(Experiences, { experiences: student.experiences }), _jsx(Contact, { email: student.email }), _jsx(ContactForm, {}), _jsx(Projects, { projects: projects, removeProject: removeProject }), _jsx(CreateProject, { addProject: addProject })] }));
}
export default App; // Ensure this line is present at the end
