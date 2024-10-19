// src/server.ts
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { projectSchema } from '../schemas/projectSchema';
import {z} from "zod";

const app = new Hono();

app.use('*', cors());

let projects = [
    { id: 1, title: 'Project 1', description: 'Description 1', createdAt: new Date().toISOString(), category: 'Web' },
    { id: 2, title: 'Project 2', description: 'Description 2', createdAt: new Date().toISOString(), category: 'Mobile' },
];

app.post('/projects', async (c) => {
    const newProjectData = await c.req.json();

    try {
        projectSchema.parse(newProjectData);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return c.json({ message: 'Invalid project data', errors: error.errors }, 400);
        }
        return c.json({ message: 'An unexpected error occurred' }, 500);
    }

    const newProject = {
        id: projects.length + 1,
        ...newProjectData,
        publishedAt: dayjs().toISOString(),
    };
    projects.push(newProject);
    return c.json({ message: 'Project added successfully', projects });
});

serve(app);
console.log("Backend running!");
