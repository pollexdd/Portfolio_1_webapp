import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    studentInfo: { student: string; degree: string; points: number };
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ studentInfo, children }) => {
    return (
        <div className="layout-container">
            <Header
                student={studentInfo.student}
                degree={studentInfo.degree}
                points={studentInfo.points}
            />
            <main className="layout-content">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
