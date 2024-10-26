import { Project } from '../../types/types';
export declare const useProjects: () => {
    projects: Project[];
    loading: boolean;
    error: Error | null;
};
