// src/frontend/components/Project.tsx
import React from 'react';
import { Project } from '../../types/types';
import { formatDate } from '../../utils/dateUtils';

const ProjectComponent: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Category: {project.category}</p>
            {project.status && <p>Status: {project.status}</p>}
            {project.public !== undefined && <p>Public: {project.public ? 'Yes' : 'No'}</p>}
            {project.publishedAt && <p>Published: {formatDate(project.publishedAt, 'DD/MM/YYYY')}</p>}

            {project.tags && project.tags.length > 0 && (
                <p>Tags: {project.tags.join(', ')}</p>
            )}

            {project.demos && project.demos.length > 0 && (
                <div>
                    <p>Demos:</p>
                    <ul>
                        {project.demos.map((demo, index) => (
                            <li key={index}>
                                <a href={demo} target="_blank" rel="noopener noreferrer">{demo}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {project.files && project.files.length > 0 && (
                <div>
                    <p>Files:</p>
                    <ul>
                        {project.files.map((file, index) => (
                            <li key={index}>
                                <a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {project.author && (
                <div>
                    <p>Author: {project.author.name}</p>
                    {project.author.bio && <p>Bio: {project.author.bio}</p>}
                    {project.author.profileLink && (
                        <p>
                            <a href={project.author.profileLink} target="_blank" rel="noopener noreferrer">Author Profile</a>
                        </p>
                    )}
                </div>
            )}

            <button onClick={() => { }}>Remove</button>
        </div>
    );
};

export default ProjectComponent;
