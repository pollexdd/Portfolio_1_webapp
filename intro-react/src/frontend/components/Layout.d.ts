import React from 'react';
interface LayoutProps {
    studentInfo: {
        student: string;
        degree: string;
        points: number;
    };
    children: React.ReactNode;
}
declare const Layout: React.FC<LayoutProps>;
export default Layout;
