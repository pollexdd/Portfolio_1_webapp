// src/services/api.ts
import { projectsSchema } from '../../schemas/projectSchema';
import { Project } from '../../types/types';
import { z } from 'zod';

export const getProjects = async (): Promise<Project[]> => {
    const response = await fetch('http://localhost:3000/projects');
    const data = await response.json();

    try {
        const projects = projectsSchema.parse(data.projects);
        return projects;
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error('Validation error:', error.errors);
            throw new Error('Invalid data format');
        }
        throw error;
    }
};
