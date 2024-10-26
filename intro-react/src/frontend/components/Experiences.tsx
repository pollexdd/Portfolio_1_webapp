import React from 'react';
import Experience from './Experience';

interface ExperiencesProps {
    experiences: { name: string; details: string }[];
}

const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
    return (
        <div className="experiences-container">
            {experiences.length === 0 ? (
                <p className="no-experiences">No experiences listed.</p>
            ) : (
                experiences.map((experience, index) => (
                    <Experience key={index} name={experience.name}>
                        <span>{experience.details}</span>
                    </Experience>
                ))
            )}
        </div>
    );
};

export default Experiences;
