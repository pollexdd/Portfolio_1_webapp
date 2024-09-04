import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, writeFileSync } from 'node:fs';
const app = new Hono();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use('*', serveStatic({ root: './public' }));
app.get('/', (c) => {
    const html = readFileSync(join(__dirname, '../public/index.html'), 'utf-8');
    return c.html(html);
});
app.get('/projects.json', (c) => {
    const json = readFileSync(join(__dirname, '../public/projects.json'), 'utf-8');
    return c.json(JSON.parse(json));
});
app.post('/projects', async (c) => {
    try {
        const newProject = await c.req.json();
        const projectsPath = join(__dirname, '../projects.json');
        const projectsData = JSON.parse(readFileSync(projectsPath, 'utf-8'));
        projectsData.projects.push(newProject);
        writeFileSync(projectsPath, JSON.stringify(projectsData, null, 2), 'utf-8');
        return c.json({ message: 'Project added successfully' }, 200);
    }
    catch (error) {
        console.error('Error updating projects.json:', error);
        return c.json({ message: 'Failed to add project' }, 500);
    }
});
const port = 3000;
console.log(`Server is running on port ${port}`);
serve({
    fetch: app.fetch,
    port,
});
