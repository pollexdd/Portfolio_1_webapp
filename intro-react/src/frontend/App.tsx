import { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Experiences from './components/Experiences.tsx';
import Contact from './components/Contact.tsx';
import Projects from './components/Projects.tsx';
import CreateProject from './components/CreateProject.tsx';
import ContactForm from './components/ContactForm.tsx';

export interface Project {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    category: string;
}

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

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:3000/projects');
                const data = await response.json();
                setProjects(data.projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const addProject = (newProject: Omit<Project, 'id' | 'createdAt'>) => {
        const newProjectWithId = {
            ...newProject,
            id: projects.length + 1,
            createdAt: new Date().toISOString(),
        };
        setProjects([...projects, newProjectWithId]);
    };

    const removeProject = (index: number) => {
        setProjects(projects.filter((_, i) => i !== index));
    };

    return (
        <div>
            <Header student={student.name} degree={student.degree} points={student.points} />
            <Experiences experiences={student.experiences} />
            <Contact email={student.email} />
            <ContactForm />
            <Projects projects={projects} removeProject={removeProject} />
            <CreateProject addProject={addProject} />
        </div>
    );
}

export default App;
