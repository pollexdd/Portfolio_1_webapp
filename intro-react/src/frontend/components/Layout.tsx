// src/components/Layout.tsx
import React from 'react';
import Header from './Header';  // Importer Header-komponenten
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const studentInfo = {
        student: 'Herman Fagerlie',
        degree: 'Bachelor IT',
        points: 180
    };

    return (
        <div>
            <Header student={studentInfo.student} degree={studentInfo.degree} points={studentInfo.points} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
