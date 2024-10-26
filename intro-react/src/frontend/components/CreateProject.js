import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/frontend/components/CreateProject.tsx
import { useState } from 'react';
import { z } from 'zod';
// Define the schema for validation
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
function CreateProject({ addProject }) {
    // Declare state variables
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState("In Progress");
    const [tags, setTags] = useState([]);
    const [isPublic, setIsPublic] = useState(true);
    const [link, setLink] = useState('');
    const [demos, setDemos] = useState([]);
    const [files, setFiles] = useState([]);
    const [authorName, setAuthorName] = useState('');
    const [authorBio, setAuthorBio] = useState('');
    const [authorProfileLink, setAuthorProfileLink] = useState('');
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const projectData = {
            id: Math.random().toString(36).substr(2, 9), // Generate a random id for the new project
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
            // Validate data with Zod schema
            projectSchema.parse(projectData);
            addProject(projectData);
        }
        catch (error) {
            console.error('Validation error:', error);
        }
    };
    // Render the form
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("label", { children: "Project Name" }), _jsx("input", { type: "text", value: title, onChange: (e) => setTitle(e.target.value) }), _jsx("label", { children: "Description" }), _jsx("textarea", { value: description, onChange: (e) => setDescription(e.target.value) }), _jsx("label", { children: "Category" }), _jsx("input", { type: "text", value: category, onChange: (e) => setCategory(e.target.value) }), _jsx("label", { children: "Status" }), _jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), children: [_jsx("option", { value: "In Progress", children: "In Progress" }), _jsx("option", { value: "Completed", children: "Completed" })] }), _jsx("label", { children: "Tags" }), _jsx("input", { type: "text", placeholder: "Comma-separated tags", onChange: (e) => setTags(e.target.value.split(',')) }), _jsx("label", { children: "Public" }), _jsx("input", { type: "checkbox", checked: isPublic, onChange: () => setIsPublic(!isPublic) }), _jsx("label", { children: "Link" }), _jsx("input", { type: "url", value: link, onChange: (e) => setLink(e.target.value) }), _jsx("label", { children: "Demos" }), _jsx("input", { type: "url", placeholder: "Add a demo URL", onBlur: (e) => e.target.value && setDemos([...demos, e.target.value]) }), _jsx("label", { children: "Files" }), _jsx("input", { type: "text", placeholder: "File name", onBlur: (e) => e.target.value && setFiles([...files, { name: e.target.value, url: '' }]) }), _jsx("input", { type: "url", placeholder: "File URL", onBlur: (e) => e.target.value && setFiles(files.map((file, i) => (i === files.length - 1 ? { ...file, url: e.target.value } : file))) }), _jsx("h3", { children: "Author" }), _jsx("label", { children: "Name" }), _jsx("input", { type: "text", value: authorName, onChange: (e) => setAuthorName(e.target.value) }), _jsx("label", { children: "Bio" }), _jsx("input", { type: "text", value: authorBio, onChange: (e) => setAuthorBio(e.target.value) }), _jsx("label", { children: "Profile Link" }), _jsx("input", { type: "url", value: authorProfileLink, onChange: (e) => setAuthorProfileLink(e.target.value) }), _jsx("button", { type: "submit", children: "Add Project" })] }));
}
export default CreateProject;
