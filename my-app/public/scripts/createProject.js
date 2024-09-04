"use strict";
// createProject.ts
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (!form)
        return;
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('project-name');
        const descriptionInput = document.getElementById('project-description');
        const technologiesInput = document.getElementById('project-technologies');
        if (!nameInput || !descriptionInput || !technologiesInput)
            return;
        const newProject = {
            name: nameInput.value,
            description: descriptionInput.value,
            technologies: technologiesInput.value,
        };
        try {
            const response = await fetch('/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProject),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const result = await response.json();
            console.log('Success:', result);
            // Clear the form fields
            nameInput.value = '';
            descriptionInput.value = '';
            technologiesInput.value = '';
        }
        catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    });
});
