// src/types/types.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    publishedAt?: string;
}

export interface ProjectProps {
    title: string;
    description: string;
    category: string;
    publishedAt?: string;
    children?: React.ReactNode;
}
