import { Project } from '../../types/types';
interface CreateProjectProps {
    addProject: (project: Project) => void;
}
declare function CreateProject({ addProject }: CreateProjectProps): import("react/jsx-runtime").JSX.Element;
export default CreateProject;
