import React from 'react';
import { Project } from '../../types/types';
interface ProjectsProps {
    projects: Project[];
    removeProject: (id: string) => void;
}
declare const Projects: React.FC<ProjectsProps>;
export default Projects;
