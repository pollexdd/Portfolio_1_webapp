import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';

const app = new Hono();

app.use('*', cors());

let projects: { id: number; title: string; description: string; createdAt: string; category: string }[] = [
    { id: 1, title: 'Project 1', description: 'Description 1', createdAt: new Date().toISOString(), category: 'Web' },
    { id: 2, title: 'Project 2', description: 'Description 2', createdAt: new Date().toISOString(), category: 'Mobile' },
];

app.get('/projects', (c) => {
    return c.json({ projects });
});

app.post('/projects', async (c) => {
    const { title, description, category } = await c.req.json();
    if (!title || !description || !category) {
        return c.json({ message: 'Title, description, and category are required' }, 400);
    }
    const newProject = {
        id: projects.length + 1,
        title,
        description,
        createdAt: new Date().toISOString(),
        category,
    };
    projects.push(newProject);
    return c.json({ message: 'Project added successfully', projects });
});

app.delete('/projects/:index', (c) => {
    const index = parseInt(c.req.param('index'), 10);
    if (isNaN(index) || index < 0 || index >= projects.length) {
        return c.json({ message: 'Invalid index' }, 400);
    }
    projects.splice(index, 1);
    return c.json({ message: 'Project removed successfully', projects });
});

serve(app);
console.log("backend running!")
