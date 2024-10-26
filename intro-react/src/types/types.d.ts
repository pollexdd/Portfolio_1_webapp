export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    publishedAt?: string;
    createdAt?: string;
    status?: string;
    tags?: string[];
    public?: boolean;
    demos?: string[];
    files?: {
        name: string;
        url: string;
    }[];
    author?: {
        name: string;
        bio?: string;
        profileLink?: string;
    };
}
export interface ProjectProps {
    id: number;
    title: string;
    description: string;
    category: string;
    publishedAt?: string;
    createdAt?: string;
}
