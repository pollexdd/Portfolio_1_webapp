// src/frontend/App.tsx
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Projects from './components/Projects';
import CreateProject from './components/CreateProject';
import ContactForm from './components/ContactForm';
import { Project } from '../types/types';
import { getProjects } from './services/api';
import './index.css';

function App() {
    const student = {
        name: 'Herman Fagerlie',
        degree: 'Bachelor IT',
        points: 180,
        email: 'hermanfa@hiof.no',
        experiences: [
            { name: 'Figma UI for customer', details: 'Design and user interface' },
            { name: 'Website for customer', details: 'Frontend and backend development' }
        ]
    };

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const fetchedProjects = await getProjects();
                console.log('Fetched Projects:', fetchedProjects);  // Log fetched projects
                setProjects(fetchedProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const addProject = (newProject: Omit<Project, 'id' | 'createdAt'>) => {
        const newProjectWithId = {
            ...newProject,
            id: (projects.length + 1).toString(),
            createdAt: new Date().toISOString(),
        };
        setProjects([...projects, newProjectWithId]);
    };

    const removeProject = (id: string) => {
        setProjects(projects.filter((project) => project.id !== id));
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
