interface ProjectProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

function Project({ title, description, children }: ProjectProps) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            {children && <div>{children}</div>}
        </div>
    );
}

export default Project;
