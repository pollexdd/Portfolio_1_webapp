import React from 'react';

interface ExperienceProps {
    name: string;
    children?: React.ReactNode;
}

const Experience: React.FC<ExperienceProps> = ({ name, children }) => {
    return (
        <div className="experience-container">
            <p className="experience-name">{name}</p>
            {children && <div className="experience-details">{children}</div>}
        </div>
    );
};

export default Experience;
