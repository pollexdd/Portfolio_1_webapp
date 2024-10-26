import { Project } from '../../types/types';
export declare const getProjects: () => Promise<Project[]>;
export declare const deleteProject: (id: string) => Promise<void>;
