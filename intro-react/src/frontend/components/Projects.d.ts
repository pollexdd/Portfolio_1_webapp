import React from 'react';
import { Project as ProjectType } from '../../types/types';
interface ProjectsProps {
    projects: ProjectType[];
    removeProject: (id: string) => void;
}
declare const Projects: React.FC<ProjectsProps>;
export default Projects;
