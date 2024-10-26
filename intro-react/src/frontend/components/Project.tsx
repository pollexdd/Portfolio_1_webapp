import React from 'react';
import { Project as ProjectType } from '../../types/types';
import { formatDate } from '../../utils/dateUtils';

interface ProjectProps {
    project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="project-container">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-category">Category: {project.category}</p>
            {project.status && <p className="project-status">Status: {project.status}</p>}
            {project.publishedAt && (
                <p className="project-published">
                    Published: {formatDate(project.publishedAt, 'DD/MM/YYYY')}
                </p>
            )}
            {project.tags && project.tags.length > 0 && (
                <p className="project-tags">Tags: {project.tags.join(', ')}</p>
            )}
            {project.demos && project.demos.length > 0 && (
                <div className="project-demos">
                    <p>Demos:</p>
                    <ul>
                        {project.demos.map((demo, index) => (
                            <li key={index} className="project-demo-item">
                                <a href={demo} target="_blank" rel="noopener noreferrer">
                                    {demo}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {project.files && project.files.length > 0 && (
                <div className="project-files">
                    <p>Files:</p>
                    <ul>
                        {project.files.map((file, index) => (
                            <li key={index} className="project-file-item">
                                <a href={file.url} target="_blank" rel="noopener noreferrer">
                                    {file.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <button className="project-remove-button" onClick={() => {}}>
                Remove
            </button>
        </div>
    );
};

export default Project;
