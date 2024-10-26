import React from 'react';

interface HeaderProps {
    student: string;
    degree: string;
    points: number;
}

const Header: React.FC<HeaderProps> = ({ student, degree, points }) => {
    return (
        <header className="header-container">
            <h1 className="header-title">{student}</h1>
            <p className="header-info">
                {degree} - {points} credits
            </p>
        </header>
    );
};

export default Header;
