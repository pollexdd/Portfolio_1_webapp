// src/backend/server.ts
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import projectSchema from '../schemas/projectSchema.js';
import { ZodError } from 'zod';
import * as dayjs from 'dayjs';
// Initialize the projects array with a defined type
let projects = [
    {
        id: "1",
        title: "Project 1",
        description: "Description 1",
        category: "Web",
        public: true,
        publishedAt: dayjs().toISOString(),
        status: "Completed",
        tags: ["React", "Frontend"],
        demos: ["https://demo1.com"],
        files: [{ name: "Design Doc", url: "https://example.com/design.pdf" }],
        author: { name: "John Doe", bio: "Full-stack developer", profileLink: "https://johndoe.com" }
    },
    {
        id: "2",
        title: "Project 2",
        description: "Description 2",
        category: "Mobile",
        public: false,
        publishedAt: dayjs().toISOString(),
        status: "In Progress",
        tags: ["Android", "Backend"],
        demos: ["https://demo2.com"],
        files: [{ name: "API Spec", url: "https://example.com/api-spec.pdf" }],
        author: { name: "Jane Smith", bio: "Mobile developer", profileLink: "https://janesmith.com" }
    }
];
const app = new Hono();
app.use('*', cors());
app.use('/projects', async (c, next) => {
    const cookie = c.req.header('cookie');
    const isAdmin = cookie?.includes('user.role=admin') ?? false;
    c.env.isAdmin = isAdmin;
    await next();
});
app.get('/projects', (c) => {
    const isAdmin = c.env.isAdmin;
    const filteredProjects = isAdmin ? projects : projects.filter(project => project.public);
    return c.json(filteredProjects);
});
app.post('/projects', async (c) => {
    const isAdmin = c.env.isAdmin;
    if (!isAdmin) {
        return c.json({ message: "Unauthorized" }, 403);
    }
    const newProjectData = await c.req.json();
    try {
        projectSchema.parse(newProjectData);
    }
    catch (error) {
        if (error instanceof ZodError) {
            return c.json({ message: 'Invalid project data', errors: error.errors }, 400);
        }
        return c.json({ message: 'An unexpected error occurred' }, 500);
    }
    const newProject = {
        id: String(projects.length + 1),
        ...newProjectData,
        publishedAt: newProjectData.publishedAt || dayjs().toISOString()
    };
    projects.push(newProject);
    return c.json({ message: 'Project added successfully', projects });
});
serve(app);
console.log("Backend running!");
