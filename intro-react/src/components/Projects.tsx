interface ProjectProps {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    category: string;
}

interface ProjectsComponentProps {
    projects: ProjectProps[];
    removeProject: (index: number) => void;
}

function Projects({ projects, removeProject }: ProjectsComponentProps) {
    if (projects.length === 0) {
        return <p>No projects available</p>;
    }

    return (
        <div>
            <p>Total Projects: {projects.length}</p>
            {projects.map((project, index) => (
                <div key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Created At: {new Date(project.createdAt).toLocaleDateString()}</p>
                    <p>Category: {project.category}</p>
                    <button onClick={() => removeProject(index)}>Remove Project</button>
                </div>
            ))}
        </div>
    );
}

export default Projects;
