// src/components/Projects.tsx
import React from 'react';
import ProjectComponent from './Project';
import { Project } from '../../types/types';

interface ProjectsProps {
    projects: Project[];
    removeProject: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, removeProject }) => {
    if (!projects || projects.length === 0) {
        return <p>No projects available.</p>;
    }

    return (
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <ProjectComponent project={project} />
                    <button onClick={() => removeProject(project.id)}>Remove</button> {/* Use ID */}
                </div>
            ))}
        </div>
    );
};

export default Projects;
