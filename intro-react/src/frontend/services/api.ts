// src/services/api.ts
import { Project } from '../../types/types';

export const getProjects = async (): Promise<Project[]> => {
    try {
        const response = await fetch('http://localhost:3000/projects', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

export const deleteProject = async (id: string): Promise<void> => {
    try {
        const response = await fetch(`http://localhost:3000/projects/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to delete project');
        }
    } catch (error) {
        console.error('Error deleting project:', error);
        throw error;
    }
};
