// src/schemas/projectSchema.ts
import { z } from 'zod';
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
export default projectSchema; // Use default export
