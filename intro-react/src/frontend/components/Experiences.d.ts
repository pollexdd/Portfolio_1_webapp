import React from 'react';
interface ExperiencesProps {
    experiences: {
        name: string;
        details: string;
    }[];
}
declare const Experiences: React.FC<ExperiencesProps>;
export default Experiences;
