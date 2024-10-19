// Experience.tsx
interface ExperienceProps {
    name: string;
    children?: React.ReactNode;
}

function Experience({ name, children }: ExperienceProps) {
    return (
        <div>
            <p>{name}</p>
            {children && <div>{children}</div>} {}
        </div>
    );
}

export default Experience;
