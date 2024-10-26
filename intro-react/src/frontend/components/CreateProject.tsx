// src/frontend/components/CreateProject.tsx
import { useState } from 'react';
import { z } from 'zod';
import { Project } from '../../types/types'; // Import the Project type

const projectSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    category: z.string().min(1, 'Category is required'),
    status: z.enum(["In Progress", "Completed"]).optional(),
    tags: z.array(z.string()).optional(),
    public: z.boolean().optional(),
    link: z.string().url().optional(),
    demos: z.array(z.string().url()).optional(),
    files: z.array(z.object({
        name: z.string(),
        url: z.string().url(),
    })).optional(),
    author: z.object({
        name: z.string(),
        bio: z.string().optional(),
        profileLink: z.string().url().optional(),
    }).optional(),
});

interface CreateProjectProps {
    addProject: (project: Project) => void;
}

function CreateProject({ addProject }: CreateProjectProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState<'In Progress' | 'Completed'>("In Progress");
    const [tags, setTags] = useState<string[]>([]);
    const [isPublic, setIsPublic] = useState(true);
    const [link, setLink] = useState('');
    const [demos, setDemos] = useState<string[]>([]);
    const [files, setFiles] = useState<{ name: string; url: string }[]>([]);
    const [authorName, setAuthorName] = useState('');
    const [authorBio, setAuthorBio] = useState('');
    const [authorProfileLink, setAuthorProfileLink] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const projectData = {
            id: Math.random().toString(36).substr(2, 9),
            title,
            description,
            category,
            status,
            tags,
            public: isPublic,
            link,
            demos,
            files,
            author: {
                name: authorName,
                bio: authorBio,
                profileLink: authorProfileLink,
            },
        };

        try {
            projectSchema.parse(projectData);
            addProject(projectData as Project);
        } catch (error) {
            console.error('Validation error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-project-form">
            <label className="create-project-label">Project Name</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="create-project-input" />

            <label className="create-project-label">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="create-project-textarea" />

            <label className="create-project-label">Category</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="create-project-input" />

            <label className="create-project-label">Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value as 'In Progress' | 'Completed')} className="create-project-select">
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>

            <label className="create-project-label">Tags</label>
            <input type="text" placeholder="Comma-separated tags" onChange={(e) => setTags(e.target.value.split(','))} className="create-project-input" />

            <label className="create-project-label">Public</label>
            <input type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)} className="create-project-checkbox" />

            <label className="create-project-label">Link</label>
            <input type="url" value={link} onChange={(e) => setLink(e.target.value)} className="create-project-input" />

            <label className="create-project-label">Demos</label>
            <input type="url" placeholder="Add a demo URL" onBlur={(e) => e.target.value && setDemos([...demos, e.target.value])} className="create-project-input" />

            <label className="create-project-label">Files</label>
            <input
                type="text"
                placeholder="File name"
                onBlur={(e) => e.target.value && setFiles([...files, { name: e.target.value, url: '' }])}
                className="create-project-input"
            />
            <input
                type="url"
                placeholder="File URL"
                onBlur={(e) => e.target.value && setFiles(files.map((file, i) => (i === files.length - 1 ? { ...file, url: e.target.value } : file)))}
                className="create-project-input"
            />

            <h3 className="create-project-author-title">Author</h3>
            <label className="create-project-label">Name</label>
            <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} className="create-project-input" />
            <label className="create-project-label">Bio</label>
            <input type="text" value={authorBio} onChange={(e) => setAuthorBio(e.target.value)} className="create-project-input" />
            <label className="create-project-label">Profile Link</label>
            <input type="url" value={authorProfileLink} onChange={(e) => setAuthorProfileLink(e.target.value)} className="create-project-input" />

            <button type="submit" className="create-project-submit">Add Project</button>
        </form>
    );
}

export default CreateProject;
