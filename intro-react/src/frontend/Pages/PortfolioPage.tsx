import React from 'react';
import Layout from '../components/Layout';  // Importer Layout
import Projects from '../components/Projects';

const PortfolioPage: React.FC = () => {
    return (
        <Layout>
            <h1>My Portfolio</h1>
    <Projects />  {}
    </Layout>
);
};

export default PortfolioPage;
