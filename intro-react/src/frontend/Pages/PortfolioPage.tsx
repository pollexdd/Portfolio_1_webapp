// src/pages/PortfolioPage.tsx
import React from 'react';
import Layout from '../components/Layout';  // Import Layout
import Projects from '../components/Projects';

const sampleProjects = [
    { id: '1', title: 'Project 1', description: 'Description 1', category: 'Web', publishedAt: '2024-10-19', createdAt: '2024-09-01' },
    { id: '2', title: 'Project 2', description: 'Description 2', category: 'Mobile', publishedAt: '2024-10-20', createdAt: '2024-09-02' }
];

const removeProject = (id: string) => {
    console.log(`Remove project with id: ${id}`);
};

const PortfolioPage: React.FC = () => {
    return (
        <Layout>
            <h1>My Portfolio</h1>
            <Projects projects={sampleProjects} removeProject={removeProject} />  {}
        </Layout>
    );
};

export default PortfolioPage;
