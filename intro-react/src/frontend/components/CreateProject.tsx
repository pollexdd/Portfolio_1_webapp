import { useState } from 'react';

interface CreateProjectProps {
    addProject: (project: { title: string; description: string; category: string }) => void;
}

function CreateProject({ addProject }: CreateProjectProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !description.trim() || !category.trim()) {
            alert('Please fill out all fields before adding a project.');
            return;
        }
        addProject({ title, description, category });
        setTitle('');
        setDescription('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Project Name</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Description</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label>Category</label>
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit">Add Project</button>
        </form>
    );
}

export default CreateProject;
