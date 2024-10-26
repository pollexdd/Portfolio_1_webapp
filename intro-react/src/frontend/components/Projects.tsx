import React from 'react';
import { Project as ProjectType } from '../../types/types';
import ProjectComponent from './Project';

interface ProjectsProps {
    projects: ProjectType[];
    removeProject: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, removeProject }) => {
    return (
        <div className="projects-container">
            {projects.length === 0 ? (
                <p className="no-projects">No projects available.</p>
            ) : (
                projects.map((project) => (
                    <div key={project.id} className="project-item">
                        <ProjectComponent project={project} />
                        <button className="remove-project-button" onClick={() => removeProject(project.id)}>
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Projects;
