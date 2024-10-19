// src/components/Project.tsx
import React from 'react';
import { formatDate } from '../../utils/dateUtils';
import { ProjectProps } from '../../types/types';

const Project: React.FC<ProjectProps> = ({ title, description, category, publishedAt, children }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Category: {category}</p>
            {publishedAt && (
                <p>Published: {formatDate(publishedAt)}</p>)})
            {children && <div>{children}</div>}
        </div>
    );
};

export default Project;
