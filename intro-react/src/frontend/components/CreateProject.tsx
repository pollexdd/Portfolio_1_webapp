import { useState } from 'react';
import { z } from 'zod';

const projectSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    category: z.string().min(1, 'Category is required'),
});

interface ProjectData {
    title: string;
    description: string;
    category: string;
}

function CreateProject({ addProject }: { addProject: (project: ProjectData) => void }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const projectData: ProjectData = { title, description, category };

        try {
            projectSchema.parse(projectData);
            setError(null);
            addProject(projectData);
        } catch (error) {
            if (error instanceof z.ZodError) {
                setError(error.errors[0]?.message || 'Invalid data');
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Project Name</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <label>Category</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            <button type="submit">Add Project</button>
            {error && <p>{error}</p>}
        </form>
    );
}

export default CreateProject;
