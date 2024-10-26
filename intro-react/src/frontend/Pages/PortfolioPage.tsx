import { useEffect, useState } from 'react';
import Projects from '../components/Projects';
import { getProjects, deleteProject } from '../services/api'; // assuming deleteProject exists in api.ts
import { Project } from '../../types/types';

const PortfolioPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsFromServer = await getProjects();
                setProjects(projectsFromServer);
            } catch (error) {
                console.error('Error loading projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const removeProject = async (projectId: string) => {
        try {
            await deleteProject(projectId); // Calls the API to delete the project
            setProjects((prevProjects) => prevProjects.filter(project => project.id !== projectId));
        } catch (error) {
            console.error('Error removing project:', error);
        }
    };

    return (
        <div>
            <h1>My Portfolio</h1>
            <Projects projects={projects} removeProject={removeProject} /> {/* Pass removeProject */}
        </div>
    );
};

export default PortfolioPage;
