// src/schemas/projectSchema.ts
import { z } from 'zod';

export const projectSchema = z.object({
    id: z.string(),
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    category: z.string().min(1, { message: 'Category is required' }),
    publishedAt: z.string().optional(),
});

export const projectsSchema = z.array(projectSchema);
