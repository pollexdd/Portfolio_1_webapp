import { z } from 'zod';
declare const projectSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    category: z.ZodString;
    status: z.ZodOptional<z.ZodEnum<["In Progress", "Completed"]>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    public: z.ZodOptional<z.ZodBoolean>;
    link: z.ZodOptional<z.ZodString>;
    demos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
    }, {
        name: string;
        url: string;
    }>, "many">>;
    author: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        bio: z.ZodOptional<z.ZodString>;
        profileLink: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        bio?: string | undefined;
        profileLink?: string | undefined;
    }, {
        name: string;
        bio?: string | undefined;
        profileLink?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    category: string;
    status?: "In Progress" | "Completed" | undefined;
    tags?: string[] | undefined;
    public?: boolean | undefined;
    link?: string | undefined;
    demos?: string[] | undefined;
    files?: {
        name: string;
        url: string;
    }[] | undefined;
    author?: {
        name: string;
        bio?: string | undefined;
        profileLink?: string | undefined;
    } | undefined;
}, {
    title: string;
    description: string;
    category: string;
    status?: "In Progress" | "Completed" | undefined;
    tags?: string[] | undefined;
    public?: boolean | undefined;
    link?: string | undefined;
    demos?: string[] | undefined;
    files?: {
        name: string;
        url: string;
    }[] | undefined;
    author?: {
        name: string;
        bio?: string | undefined;
        profileLink?: string | undefined;
    } | undefined;
}>;
export default projectSchema;
