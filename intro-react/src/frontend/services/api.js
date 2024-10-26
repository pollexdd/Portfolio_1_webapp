export const getProjects = async () => {
    const response = await fetch('http://localhost:3000/projects');
    const data = await response.json();
    // Adjust parsing logic based on the API response structure
    try {
        return data; // Assuming the API returns an array of projects directly
    }
    catch (error) {
        console.error('Error fetching projects:', error);
        throw new Error('Failed to fetch projects');
    }
};
