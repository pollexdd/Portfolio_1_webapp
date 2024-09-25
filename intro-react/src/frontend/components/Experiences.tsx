import Experience from './Experience.tsx';

interface ExperienceItem {
    name: string;
}

interface ExperiencesProps {
    experiences: ExperienceItem[];
}

function Experiences({ experiences }: ExperiencesProps) {
    if (experiences.length === 0) {
        return <p>Ingen erfaringer</p>;
    }

    return (
        <div>
            {experiences.map((experience, index) => (
                <Experience key={index} name={experience.name}>
                    <span>Mer info om {experience.name}</span>
                </Experience>
            ))}
        </div>
    );
}

export default Experiences;
